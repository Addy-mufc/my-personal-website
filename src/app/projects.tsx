import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "An Observational Study of iPhone Users",
      description: "Conducted an in-depth study of iPhone usage patterns to understand factors influencing purchase decisions. Interviewed over 30 users, analyzed market trends, and used PowerBI to visualize data and communicate findings to stakeholders.",
      technologies: ["Research Methodology", "Data Analysis", "PowerBI", "User Interviews"],
      outcomes: [
        "Identified key drivers of iPhone adoption",
        "Highlighted the importance of iMessage for iPhone users",
        "Recommended Apple to adopt cross-platform messaging standards"
      ]
    },
    {
      title: "Energy and Weather Data Integration Pipeline",
      description: "Collaborated with a team to create an ETL data pipeline in Google Cloud Platform (GCP) that integrates data from five live sources, processing millions of rows in real-time.",
      technologies: ["Python", "PySpark", "Google Cloud Platform", "ETL", "API Integration"],
      outcomes: [
        "Developed Python code to fetch data from APIs at regular intervals",
        "Created scalable PySpark code for data cleaning, processing, and integration",
        "Implemented the pipeline to run on GCP clusters"
      ]
    },
    {
      title: "Inventory Management Application (Internship Project)",
      description: "Led the development and implementation of a client's inventory management application inside Oracle NetSuite during internship at PARA Business Systems.",
      technologies: ["HTML", "JavaScript", "SQL", "MapReduce", "Oracle NetSuite"],
      outcomes: [
        "Pushed over 6000 lines of code into production",
        "Automated inventory tracking process across 8 US locations",
        "Improved workers' productivity by hundreds of hours per week"
      ]
    },
    {
      title: "Project Management Workflow Optimization",
      description: "Enhanced productivity for Project Managers by developing a plugin that utilizes LLMs to process daily standup meeting recordings.",
      technologies: ["LLMs", "Audio Processing", "Natural Language Processing"],
      outcomes: [
        "Automated transcription, summarization, and translation of meeting recordings",
        "Generated To-Do lists from meeting content",
        "Saved approximately 10 hours per week per Project Manager"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
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
                  <li key={outcomeIndex}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

