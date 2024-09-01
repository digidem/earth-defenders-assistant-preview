import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/custom/whatsapp-button';

const CallToAction = ({ theme, themeColors }) => {
  return (
    <section className={`py-16 ${themeColors[theme].secondary} ${themeColors[theme].textDark} relative transition-colors duration-500`}>
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Defend the Earth?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Start using Earth Defender Assistant today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <WhatsAppButton text="Try Now" theme={theme === 'default' ? 'earthDefenders' : 'default'} />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;