import React from 'react';
import { motion } from 'framer-motion';
const Footer = ({ theme, themeColors }) => {
    return (
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
    )
}

export default Footer;