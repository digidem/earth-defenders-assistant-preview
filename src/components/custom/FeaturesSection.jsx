import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Leaf, Shield } from 'lucide-react';

const FeaturesSection = ({ theme, themeColors }) => {
  return (
    <section id="features" className={`py-32 ${themeColors[theme].background} relative`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${themeColors[theme].textPrimary}`}>Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {[
            { icon: <Globe className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Mapeo Integration", description: "Seamlessly create and manage geo-observations through WhatsApp" },
            { icon: <Leaf className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Terrastories Connection", description: "Share and preserve your community's stories with ease" },
            { icon: <Shield className={`${themeColors[theme].icon} mb-4`} size={48} />, title: "Earth Defenders Toolkit", description: "Access a wealth of resources and tools for environmental protection" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${themeColors[theme].card}`}
            >
              {feature.icon}
              <h3 className={`text-xl font-bold mb-2 ${themeColors[theme].textPrimary}`}>{feature.title}</h3>
              <p className={themeColors[theme].text}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16" style={{ transform: 'scaleY(-1)' }}>
          <path d="M1200 120L0 16.48V0h1200v120z" className={`fill-current ${themeColors[theme].textAccent}`}></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;