import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = ({ theme, themeColors }) => {
  return (
    <section id="how-it-works" className={`py-16 ${themeColors[theme].accent} relative transition-colors duration-500`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${themeColors[theme].textDark}`}>How It Works</h2>
        <div className={`pb-32 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 ${themeColors[theme].textDark}`}>
          {[
            { step: 1, text: "Join the WhatsApp group" },
            { step: 2, text: "Send a message to the bot" },
            { step: 3, text: "Bot processes your request" },
            { step: 4, text: "Receive information or confirm actions" }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className={`${themeColors[theme].primary} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4`}>
                {step.step}
              </div>
              <p className="text-center">{step.text}</p>
              {index < 3 && <div className={`hidden md:block ${themeColors[theme].textPrimary} text-4xl mx-4`}>→</div>}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M1200 120L0 16.48V0h1200v120z" className={`fill-current ${themeColors[theme].background}`}></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;