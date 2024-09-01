import React from 'react';
import { MessageCircle, Shield, Globe, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Header */}
      <header className="bg-green-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Earth Defender Assistant</div>
          <nav>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="cursor-pointer bg-green-600 text-white p-2 rounded"
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
      <section id="home" className="py-20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center pb-8">
            <AnimatedLogo />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">Empower Earth Defenders through WhatsApp</h1>
          <p className="pb-4 text-xl mb-8 text-green-100">Connect with Mapeo, Terrastories, and Earth Defenders Toolkit through a simple chat interface</p>
          <WhatsAppButton text="Start Chatting Now" />
          {/* <Button
            className="bg-white text-green-600 hover:bg-green-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300"
            onClick={() => window.open('https://wa.me/your-whatsapp-number', '_blank')}
          >
            Start Chatting Now
          </Button> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="text-green-500 mb-4" size={48} />, title: "Mapeo Integration", description: "Seamlessly create and manage geo-observations through WhatsApp" },
              { icon: <Leaf className="text-green-500 mb-4" size={48} />, title: "Terrastories Connection", description: "Share and preserve your community's stories with ease" },
              { icon: <Shield className="text-green-500 mb-4" size={48} />, title: "Earth Defenders Toolkit", description: "Access a wealth of resources and tools for environmental protection" }
            ].map((feature, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-green-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { step: 1, text: "Join the WhatsApp group" },
              { step: 2, text: "Send a message to the bot" },
              { step: 3, text: "Bot processes your request" },
              { step: 4, text: "Receive information or confirm actions" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <p className="text-center">{step.text}</p>
                {index < 3 && <div className="hidden md:block text-green-500 text-4xl mx-4">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pros and Cons of Using WhatsApp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center"><CheckCircle className="text-green-500 mr-2" /> Advantages</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Widely accessible and familiar interface</li>
                <li>Works on low-bandwidth connections</li>
                <li>Easy to use for non-technical users</li>
                <li>Supports multimedia content sharing</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center"><AlertTriangle className="text-red-500 mr-2" /> Considerations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Owned by Meta (privacy concerns)</li>
                <li>Requires phone number for registration</li>
                <li>Limited by WhatsApp's API restrictions</li>
                <li>May not be ideal for large-scale data management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Your Ultimate Ally in Land Protection</h2>
          <p className="text-xl mb-8">Invite it to your WhatsApp group and start using Earth Defender Assistant today!</p>
          <WhatsAppButton text="Try Now" />
        </div>
      </section>
      <section>
        <Contact />
      </section>
      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Earth Defender Assistant</h3>
          <p>Empowering communities to protect their environment through accessible technology.</p>
          <div className="mt-4">
            <a href="https://awana.digital" className="hover:text-green-300 mx-2">awana.digital</a>
            <a href="https://mapeo.app" className="hover:text-green-300 mx-2">mapeo.app</a>
            <a href="https://terrastories.app" className="hover:text-green-300 mx-2">terrastories.app</a>
            <a href="https://earthdefenderstoolkit.com" className="hover:text-green-300 mx-2">earthdefenderstoolkit.com</a>
          </div>
          <div className="mt-8 text-sm">
            <p>&copy; 2024 Earth Defender Assistant. All rights reserved. | FOSS and free to use</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
