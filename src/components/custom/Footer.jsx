import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ theme, themeColors }) => {
    return (
        <footer className={`${themeColors[theme].secondary} ${themeColors[theme].textDark} py-8 transition-colors duration-500`}>
            <div className="container mx-auto text-center">
                <div className={`${themeColors[theme].accent} ${themeColors[theme].textDark} py-2 px-4 inline-block rounded`}>
                    <a href="https://awana.digital" className="hover:text-green-300">Awana Digital</a>
                </div>
                <p className="mt-4">&copy; {new Date().getFullYear()} Earth Defender Assistant</p>
                <div className="mt-4 space-x-2 flex justify-center">
                    <motion.a
                        href="https://mapeo.app"
                        className={`${themeColors[theme].button} py-2 px-4 rounded-full transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                    >
                        CoMapeo
                    </motion.a>
                    <motion.a
                        href="https://terrastories.app"
                        className={`${themeColors[theme].button} py-2 px-4 rounded-full transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                    >
                        Terrastories
                    </motion.a>
                    <motion.a
                        href="https://earthdefenderstoolkit.com"
                        className={`${themeColors[theme].button} py-2 px-4 rounded-full transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                    >
                        Earth Defenders Toolkit
                    </motion.a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;