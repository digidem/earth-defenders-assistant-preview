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
      primary: 'bg-green-800',
      textPrimary: 'text-green-800',
      secondary: 'bg-gray-700',
      background: 'bg-green-50',
      accent: 'bg-green-100',
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
      textDark: 'text-white',
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
        <section id="home" className={`py-20 relative overflow-hidden ${themeColors[theme].secondary} ${themeColors[theme].text} transition-colors duration-500`} style={{ backgroundImage: theme === 'default' ? 'linear-gradient(to right, rgba(34, 197, 94, 0.55), rgba(22, 163, 74, 0.55)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')' : 'linear-gradient(to right, rgba(122, 126, 86, 0.55), rgba(122, 126, 86, 0.55)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')', backgroundSize: 'contain' }}>
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
          <div className="absolute text-white -bottom-0.5 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20" style={{ transform: 'scaleY(-1)' }}>
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-white border-white"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white relative">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
              {[
                { icon: <Globe className="text-green-500 mb-4" size={48} />, title: "Mapeo Integration", description: "Seamlessly create and manage geo-observations through WhatsApp" },
                { icon: <Leaf className="text-green-500 mb-4" size={48} />, title: "Terrastories Connection", description: "Share and preserve your community's stories with ease" },
                { icon: <Shield className="text-green-500 mb-4" size={48} />, title: "Earth Defenders Toolkit", description: "Access a wealth of resources and tools for environmental protection" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${themeColors[theme].background}`}
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16" style={{ transform: 'scaleY(-1)' }}>
              <path d="M1200 120L0 16.48V0h1200v120z" className={`fill-current transition-colors duration-500 ${themeColors[theme].textAccent}`}></path>
            </svg>
          </div>
        </section>

        {/* How It Works Section */}
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
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <p className="text-center">{step.text}</p>
                  {index < 3 && <div className="hidden md:block text-green-500 text-4xl mx-4">→</div>}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
              <path d="M1200 120L0 16.48V0h1200v120z" className="fill-current text-[#F5F3E5]"></path>
            </svg>
          </div>
        </section>

        {/* Pros and Cons Section */}
        <section className="pt-16 pb-32 bg-[#F5F3E5] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Pros and Cons of Using WhatsApp</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-green-50 rounded-full p-16 shadow-lg relative"
              >
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center"><CheckCircle className="text-green-500 mr-2" /> Advantages</h3>
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
                className="bg-red-50 rounded-full p-16 shadow-lg relative"
              >
                <div className="absolute -top-12 -right-2 w-16 h-16 bg-red-200 rounded-full opacity-50 animate-pulse"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center"><AlertTriangle className="text-red-500 mr-2" /> Considerations</h3>
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
              className="w-96 h-96 bg-green-100 rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="w-72 h-72 bg-red-100 rounded-full opacity-30"
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
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`fill-current ${themeColors[theme].textPrimary}`}></path>
            </motion.svg>
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
              <WhatsAppButton text="Try Now" theme={theme === 'default' ? 'earthDefenders' : 'default'} />
            </motion.div>
          </div>

        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#F5F3E5] relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16" style={{ transform: 'scaleY(-1)' }}>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`fill-current ${themeColors[theme].textPrimary}`}></path>
            </svg>
          </div>
          <div className="container mx-auto pt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-md mx-auto ${themeColors[theme].accent} rounded-lg p-8 shadow-lg transition-colors duration-500`}
            >
              <Contact theme={themeColors[theme].textDark} />
            </motion.div>
          </div>
        </section>

        {/* Footer */}

        <footer className={`${themeColors[theme].accent} text-white py-8 transition-colors duration-500`}>

          <div className="container mx-auto text-center">
            <div className="bg-[#4C1130] text-white py-2 px-4 inline-block rounded">
              <a href="https://awana.digital" className="hover:text-green-300">Awana Digital</a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Earth Defender Assistant</p>
            <div className="mt-4 space-x-2 flex justify-center">
              <motion.a
                href="https://mapeo.app"
                className="bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                CoMapeo
              </motion.a>
              <motion.a
                href="https://terrastories.app"
                className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terrastories
              </motion.a>
              <motion.a
                href="https://earthdefenderstoolkit.com"
                className="bg-[#3C4F60] text-white py-2 px-4 rounded-full hover:bg-[#6B6E4A] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Earth Defenders Toolkit
              </motion.a>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;