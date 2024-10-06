import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Server, Globe, Shield } from 'lucide-react';

const HowItWorksSection = ({ theme, themeColors }) => {
  const features = [
    { icon: <Mic className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Voice-First Technology", description: "Natural voice interactions in Indigenous languages" },
    { icon: <Server className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Offline-First Solutions", description: "Operate without internet using local servers" },
    { icon: <Globe className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Language Preservation", description: "Train AI models for Indigenous languages" },
    { icon: <Shield className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Territory Defense", description: "Secure tools for documenting sensitive information" }
  ];

  return (
    <section id="how-it-works" className={`pt-32 pb-64 ${themeColors[theme].accent} relative transition-colors duration-500`} style={{ backgroundImage: theme === 'default' ? 'linear-gradient(to right, rgba(34, 197, 94, 0.65), rgba(22, 163, 74, 0.65)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')' : 'linear-gradient(to right, rgba(122, 126, 86, 0.65), rgba(246, 125, 49, 0.65)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')', backgroundSize: 'contain' }}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-20 text-center ${themeColors[theme].textDark}`}>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col items-center p-6 rounded-lg ${themeColors[theme].card}`}
            >
              {feature.icon}
              <h3 className={`text-xl font-bold mb-2 ${themeColors[theme].textPrimary}`}>{feature.title}</h3>
              <p className={`text-center ${themeColors[theme].text}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M1200 120L0 16.48V0h1200v120z" className={`fill-current ${themeColors[theme].textBackground}`}></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;