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
        Contact
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-xl"
      >
        Contact information coming soon...
      </motion.p>
    </div>
  );
};

export default Contact;