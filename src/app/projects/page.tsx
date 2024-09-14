'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Energy and Weather Data Integration Pipeline",
      description: "Collaborated with 5 others to create an ETL data pipeline in Google Cloud Platform (GCP) that integrates data from five live sources of data, processing millions of rows in real-time.",
      technologies: ["Python", "PySpark", "Google Cloud Platform", "ETL", "API Integration"],
      outcomes: [
        "Developed python code that runs on a scheduler to fetch data from APIs at regular intervals",
        "Created scalable pyspark code that runs on clusters to clean, process and integrate from various sources in Google Cloud Platform",
        "Processed millions of rows of data in real-time"
      ]
    },
    {
      title: "An Observational Study of iPhone Users",
      description: "Conducted an in-depth study of iPhone usage patterns to understand the factors that influence purchase decisions. Interviewed over 30 users and analyzed market trends to identify key drivers of adoption.",
      technologies: ["Research Methodology", "Data Analysis", "PowerBI", "User Interviews"],
      outcomes: [
        "Developed a research plan and methodology",
        "Collaborated with a team to collect and analyze data",
        "Used PowerBI to visualize data and communicate findings to stakeholders",
        "Identified key findings, including the importance of iMessage for iPhone users",
        "Recommended Apple to adopt cross-platform messaging standards"
      ]
    },
    {
      title: "An Observational Study of iPhone Users",
      description: "Conducted an in-depth study of iPhone usage patterns to understand the factors that influence purchase decisions. Interviewed over 20 individuals and analyzed market trends to identify key drivers of adoption. Developed a research plan and methodology, and collaborated with a team to collect and analyze data. Used PowerBI to visualize data and communicate findings to stakeholders.",
      technologies: ["Research Methodology", "Data Analysis", "PowerBI", "User Interviews"],
      outcomes: [
        "Identified key drivers of iPhone adoption",
        "Highlighted the importance of iMessage for iPhone users",
        "Recommended Apple to adopt cross-platform messaging standards"
      ]
    },
    {
      title: "Shift Your Focus: Spreading Awareness for Safe Driving in the Digital Age",
      description: "As part of the Info Challenge at UMD, collaborated with a team of 4 to analyze a survey dataset from the Washington Traffic Safety Commission (WTSC) in order to evaluate public knowledge and adherence to traffic laws enacted in 2018.",
      technologies: ["Python", "Tableau", "PowerBI", "Data Analysis"],
      outcomes: [
        "Utilized Python, Tableau, and PowerBI to identify key parameters and subgroups within the dataset",
        "Recommended social media campaigns on YouTube and Facebook to raise awareness among 18-29 year-olds",
        "Based recommendations on insights from PewResearch center social media usage dataset"
      ]
    },
    {
      title: "Socioeconomic Disparities in California's Water Quality",
      description: "Conducted a data-driven research project comparing water quality between counties in California to analyze potential socioeconomic disparities.",
      technologies: ["Data Cleaning", "Statistical Analysis", "Two-sample t-test"],
      outcomes: [
        "Utilized multiple data sources and data cleaning techniques",
        "Performed a two-sample t-test to assess differences in water quality parameters",
        "Provided insights for policy recommendations and suggested further research"
      ]
    },
    {
      title: "TerpGymBuddy",
      description: "Led the product direction for a team of 4 to design a website that recommends exercises and time slots to UMD students based on their class schedules.",
      technologies: ["AngularJS", "MySQL", "Product Management"],
      outcomes: [
        "Scoped out features/user requirements",
        "Built a product roadmap",
        "Created a detailed design report before implementing the project"
      ]
    },
    {
      title: "Distance Estimation Technique for Autonomous Vehicles",
      description: "Led the development of a vision-based system for autonomous vehicles to identify, track, and estimate distances from neighboring vehicles in real-time using YOLOv4 and Deep SORT algorithms.",
      technologies: ["Python", "TensorFlow", "OpenCV", "YOLOv4", "Deep SORT"],
      outcomes: [
        "Devised a method for estimating distance by correlating parameters of bounding boxes with the distance between vehicles",
        "Implemented the solution using a combination of Python, TensorFlow, and OpenCV libraries"
      ]
    },
    {
      title: "Smart Cart",
      description: "Collaborated with three others to develop a Shopping Cart that works in real-time with the Android Application.",
      technologies: ["Raspberry Pi", "IoT", "Firebase", "Android"],
      outcomes: [
        "Used Raspberry Pi, camera, LiDAR sensor as hardware and Firebase as a database",
        "Automated the Supermarket shopping experience for the customer using IoT"
      ]
    },
    {
      title: "Loan Eligibility Predictor",
      description: "Designed a Loan Eligibility Predictor as part of Oracle Build-A-Thon that enables banks to sanction loans easily.",
      technologies: ["Machine Learning", "Logistic Regression", "Data Pre-processing"],
      outcomes: [
        "Performed data pre-processing to fill missing values, removed irrelevant fields",
        "Used Logistic Regression Machine Learning model to predict with a high accuracy rate"
      ]
    },
    {
      title: "Appointment Application for Hospital",
      description: "Built an Android App for the Ministry of Aayush that enables patients to book an appointment with a doctor and their preferred time as part of the Smart India Hackathon in 2020.",
      technologies: ["Android Studio", "Java", "Firebase"],
      outcomes: [
        "Developed an Android application for booking doctor appointments",
        "Used Firebase for authentication and database"
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
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key Outcomes:</h3>
              <ul className="list-disc list-inside">
                {project.outcomes.map((outcome, outcomeIndex) => (
                  <motion.li 
                    key={outcomeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (outcomeIndex * 0.05) }}
                  >
                    {outcome}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

