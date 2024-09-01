import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = ({ theme, themeColors }) => {
  const steps = [
    { step: 1, text: "Join the WhatsApp group" },
    { step: 2, text: "Send a message to the bot" },
    { step: 3, text: "Bot processes your request" },
    { step: 4, text: "Receive information or confirm actions" }
  ];

  return (
    <section id="how-it-works" className={`py-16 ${themeColors[theme].accent} relative transition-colors duration-500`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${themeColors[theme].textDark}`}>How It Works</h2>
        <div className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 ${themeColors[theme].textDark}`}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center relative"
              >
                <div className={`${themeColors[theme].primary} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4`}>
                  {step.step}
                </div>
                <p className="text-center max-w-[150px]">{step.text}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatType: "reverse" }}
                  className="hidden md:block mx-4"
                >
                  <ArrowRight className={`${themeColors[theme].textPrimary} w-8 h-8`} />
                </motion.div>
              )}
            </React.Fragment>
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