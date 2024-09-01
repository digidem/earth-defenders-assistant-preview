import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ theme, themeColors }) => {
    return (
        <footer className={`${themeColors[theme].secondary} ${themeColors[theme].textDark} py-8 transition-colors duration-500`} style={{ backgroundImage: theme === 'default' ? 'linear-gradient(to right, rgba(34, 197, 94, 0.55), rgba(22, 163, 74, 0.55)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')' : 'linear-gradient(to right, rgba(122, 126, 86, 0.55), rgba(246, 125, 49, 0.55)), url(\'https://www.transparenttextures.com/patterns/dark-mosaic.png\')', backgroundSize: 'contain' }}>
            <div className="container mx-auto text-center">
                <div className={`${themeColors[theme].accent} ${themeColors[theme].textDark} py-2 px-4 inline-block rounded`}>
                    <a href="https://awana.digital" className="hover:text-green-300">Awana Digital</a>
                </div>
                <div className="relative mt-4">
                    <p className="relative py-4 z-10">&copy; {new Date().getFullYear()} Earth Defender Assistant</p>
                </div>
                <div className="mt-4 space-y-2 md:space-x-2 flex flex-col md:flex-row justify-center items-center">
                    {[
                        { href: "https://mapeo.app", label: "CoMapeo" },
                        { href: "https://terrastories.app", label: "Terrastories" },
                        { href: "https://earthdefenderstoolkit.com", label: "Earth Defenders Toolkit" }
                    ].map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            className={`${themeColors[theme].button} py-2 px-4 rounded-md md:rounded-full transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;