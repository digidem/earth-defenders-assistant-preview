import React, { useState, useEffect } from 'react';
import { MessageCircle, Shield, Globe, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { LoaderTwo as AnimatedLogo } from '@/components/custom/animated-map'
import WhatsAppButton from '@/components/custom/whatsapp-button'
import Contact from '@/components/custom/contact'

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
      primary: 'bg-gray-800',
      secondary: 'bg-gray-700',
      accent: 'bg-gray-200',
      text: 'text-gray-800',
    },
    earthDefenders: {
      primary: 'bg-[#7A7E56]',
      secondary: 'bg-[#F67D31]',
      accent: 'bg-[#3C4F60]',
      text: 'text-white',
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
        className={`min-h-screen ${themeColors[theme].text}`}
      >
        {/* Header */}
        <header className={`${themeColors[theme].primary} py-4 transition-colors duration-500`}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Earth Defender Assistant</div>
            <nav>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className={`cursor-pointer ${themeColors[theme].primary} text-white p-2 rounded transition-colors duration-500`}
                value={i18n.language}
              >
                {languages.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className={`py-20 relative overflow-hidden ${themeColors[theme].secondary} transition-colors duration-500`}>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center pb-8"
            >
              <AnimatedLogo />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Empower Earth Defenders through WhatsApp
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pb-4 text-xl mb-8 text-white"
            >
              Connect with Mapeo, Terrastories, and Earth Defenders Toolkit through a simple chat interface
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <WhatsAppButton text="Start Chatting Now" theme={theme} />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16" style={{ transform: 'scaleY(-1)' }}>
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`fill-current ${themeColors[theme].accent} transition-colors duration-500`}></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white relative">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
                <p>Connect with Earth Defenders tools through familiar WhatsApp interface.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p>Ensure the safety and privacy of sensitive environmental data.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
                <p>Access tools and resources from anywhere in the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`py-16 ${themeColors[theme].accent} relative transition-colors duration-500`}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold mb-4 text-gray-800">1</div>
                <h3 className="text-xl font-semibold mb-2">Connect via WhatsApp</h3>
                <p>Start a conversation with our Earth Defender Assistant bot on WhatsApp.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold mb-4 text-gray-800">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Tool</h3>
                <p>Select from Mapeo, Terrastories, or other Earth Defenders Toolkit resources.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold mb-4 text-gray-800">3</div>
                <h3 className="text-xl font-semibold mb-2">Collaborate and Protect</h3>
                <p>Use the tools to document, map, and protect your environment and community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons Section */}
        <section className="pt-16 pb-32 bg-white relative overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Pros and Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-1" />
                    <span>Easy access through WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-1" />
                    <span>No need for additional app installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-1" />
                    <span>Works in areas with limited internet connectivity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
                  Cons
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
                    <span>Requires a WhatsApp account</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
                    <span>Limited by WhatsApp's features and restrictions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
                    <span>May have reduced functionality compared to full apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-16 ${themeColors[theme].primary} text-white relative transition-colors duration-500`}>
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
              <WhatsAppButton text="Try Now" theme={theme} />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-md mx-auto ${themeColors[theme].accent} rounded-lg p-8 shadow-lg transition-colors duration-500`}
            >
              <Contact theme={theme} />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${themeColors[theme].primary} text-white py-8 transition-colors duration-500`}>
          <div className="container mx-auto text-center">
            <div className={`${themeColors[theme].secondary} text-white py-2 px-4 inline-block rounded transition-colors duration-500`}>
              <a href="https://awana.digital" className="hover:text-gray-300">Awana Digital</a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Earth Defender Assistant</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;