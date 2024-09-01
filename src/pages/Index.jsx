import React, { useState, useEffect } from 'react';
import { MessageCircle, Shield, Globe, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/custom/Header';
import HeroSection from '@/components/custom/HeroSection';
import HowItWorksSection from '@/components/custom/HowItWorksSection';
import FeaturesSection from '@/components/custom/FeaturesSection';
import ProsAndConsSection from '@/components/custom/ProsAndConsSection';
import CallToAction from '@/components/custom/CallToAction';
import ContactSection from '@/components/custom/ContactSection';
import Footer from '@/components/custom/Footer';

const Index = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' }
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTheme('earthDefenders');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const themeColors = {
    default: {
      primary: 'bg-green-800',
      textPrimary: 'text-green-800',
      secondary: 'bg-gray-700',
      background: 'bg-green-50',
      accent: 'bg-green-100',
      textBackground: 'text-green-50',
      textAccent: 'text-green-100',
      text: 'text-gray-800',
      textDark: 'text-gray-800'
    },
    earthDefenders: {
      primary: 'bg-[#F67D31]',
      textPrimary: 'text-[#F67D31]',
      secondary: 'bg-[#3C4F60]',
      background: 'bg-[#F5F3E5]',
      accent: 'bg-[#7A7E56]',
      textAccent: 'text-[#7A7E56]',
      text: 'text-[#3C4F60]',
      textDark: 'text-[#F5F3E5]',
      textBackground: 'text-[#F5F3E5]',
      button: 'bg-[#F67D31] hover:bg-[#E56D21] text-[#F5F3E5]',
      card: 'bg-[#F7F5E8] text-[#3E5163] shadow-[#7C8060]',
      icon: 'text-[#F67D31]',
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen ${themeColors[theme].background} ${themeColors[theme].text}`}
      >
        <Header theme={theme} themeColors={themeColors} changeLanguage={changeLanguage} languages={languages} />
        <HeroSection theme={theme} themeColors={themeColors} />
        <FeaturesSection theme={theme} themeColors={themeColors} />
        <HowItWorksSection theme={theme} themeColors={themeColors} />
        <ProsAndConsSection theme={theme} themeColors={themeColors} />
        <CallToAction theme={theme} themeColors={themeColors} />
        <ContactSection theme={theme} themeColors={themeColors} />
        <Footer theme={theme} themeColors={themeColors} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;