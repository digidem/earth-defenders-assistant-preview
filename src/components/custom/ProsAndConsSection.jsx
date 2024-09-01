import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ProsAndConsSection = ({ theme, themeColors }) => {
  return (
    <section className={`pt-16 pb-32 ${themeColors[theme].background} relative overflow-hidden`}>
      <div className="container mx-auto relative z-10">
        <h2 className={`text-3xl font-bold mb-12 text-center ${themeColors[theme].textPrimary}`}>Pros and Cons of Using WhatsApp</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${themeColors[theme].card} rounded-full p-16 shadow-lg relative`}
          >
            <div className={`absolute -top-8 -left-8 w-16 h-16 ${themeColors[theme].accent} rounded-full opacity-50 animate-pulse`}></div>
            <h3 className={`text-xl font-bold mb-4 flex items-center ${themeColors[theme].textPrimary}`}><CheckCircle className="mr-2" /> Advantages</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Widely accessible and familiar interface</li>
              <li>Works on low-bandwidth connections</li>
              <li>Easy to use for non-technical users</li>
              <li>Supports multimedia content sharing</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${themeColors[theme].card} rounded-full p-16 shadow-lg relative`}
          >
            <div className={`absolute -top-12 -right-2 w-16 h-16 ${themeColors[theme].accent} rounded-full opacity-50 animate-pulse`}></div>
            <h3 className={`text-xl font-bold mb-4 flex items-center ${themeColors[theme].textPrimary}`}><AlertTriangle className="mr-2" /> Considerations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Owned by Meta (privacy concerns)</li>
              <li>Requires phone number for registration</li>
              <li>Limited by WhatsApp's API restrictions</li>
              <li>May not be ideal for large-scale data management</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className={`w-96 h-96 ${themeColors[theme].accent} rounded-full opacity-30`}
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        ></motion.div>
        <motion.div
          className={`w-72 h-72 ${themeColors[theme].primary} rounded-full opacity-30`}
          animate={{ rotate: -360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        ></motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`fill-current ${themeColors[theme].secondary}`}></path>
        </motion.svg>
      </div>
    </section>
  );
};

export default ProsAndConsSection;