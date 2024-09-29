'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white"
      >
        Contact Me
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-xl space-y-4"
      >
        <p>Email: <a href="mailto:addyk@umd.edu" className="text-blue-600 hover:underline">addyk@umd.edu</a></p>
        <p>Phone: <a href="tel:9492839157" className="text-blue-600 hover:underline">(949) 283-9157</a></p>
        <p>Location: College Park, MD</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aditya-kiran-/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.linkedin.com/in/aditya-kiran-/</a></p>
      </motion.div>
    </div>
  );
};

export default Contact;