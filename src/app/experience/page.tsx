'use client'
import React from 'react';
import { motion } from 'framer-motion';
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "PARA Business Systems",
      location: "Arizona",
      duration: "July 2024 - Present",
      responsibilities: [
        "Designed and implemented a Python and SQL based integration between NetSuite and HubSpot, automating data synchronization.",
        "Automated data transfer process, reducing manual errors and saving approximately 20 hours of manual labor per week.",
        "Led strategic collaboration with JP Morgan for a client's banking platform integration.",
        "Engineered secure transaction pipelines using JavaScript, adhering to PGP encryption standards."
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of Maryland College Park",
      location: "College Park, MD",
      duration: "Jan 2023 - May 2024",
      responsibilities: [
        "Conducted Object-Oriented Programming classes (INST 326) for over 400 students across 3 semesters.",
        "Led regular lectures and laboratory sessions.",
        "Programmed autograder for assignments using Python and Pytest library."
      ]
    },
    {
      title: "Software Development Intern",
      company: "PARA Business Systems",
      location: "Arizona",
      duration: "May 2023 - Aug 2023",
      responsibilities: [
        "Led development of client's inventory management application in Oracle NetSuite using HTML and JavaScript.",
        "Built backend using SQL queries and MapReduce scripts, integrating with frontend via APIs.",
        "Pushed over 6000 lines of code into production, improving productivity across 8 US locations.",
        "Developed LLM-based plugin for Project Management workflow optimization, saving 10 hours per week per Project Manager."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white"
      >
        Professional Experience
      </motion.h1>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">{exp.title}</h2>
            <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">{exp.company} - {exp.location}</p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 font-semibold">{exp.duration}</p>
            <ul className="space-y-3">
              {exp.responsibilities.map((resp, respIndex) => (
                <motion.li 
                  key={respIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (respIndex * 0.05) }}
                  className="flex items-start"
                >
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
