// components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "devops", name: "DevOps" },
    { id: "datascience", name: "Data Science" },
    { id: "aiml", name: "AI/ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "A full-featured e-commerce platform with payment integration, real-time inventory management, and admin dashboard.",
      image: "/projects/ecommerce.jpg", // Replace with your image
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: "https://project-demo.com",
    },
    {
      id: 2,
      title: "CI/CD Pipeline Automation",
      category: "devops",
      description:
        "Automated deployment pipeline with Docker, Kubernetes, and Jenkins for microservices architecture.",
      image: "/projects/cicd.jpg",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: "https://project-demo.com",
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      category: "datascience",
      description:
        "Interactive dashboard for visualizing and predicting sales trends using advanced statistical models.",
      image: "/projects/analytics.jpg",
      technologies: ["Python", "Pandas", "Plotly", "Scikit-learn", "Streamlit"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: "https://project-demo.com",
    },
    {
      id: 4,
      title: "AI Chatbot Assistant",
      category: "aiml",
      description:
        "Intelligent chatbot using NLP and machine learning for customer support automation with 95% accuracy.",
      image: "/projects/chatbot.jpg",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: "https://project-demo.com",
    },
    {
      id: 5,
      title: "Real-Time Collaboration Tool",
      category: "fullstack",
      description:
        "Real-time collaborative workspace with WebSocket integration, document editing, and video conferencing.",
      image: "/projects/collab.jpg",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "WebRTC", "Redis"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: "https://project-demo.com",
    },
    {
      id: 6,
      title: "Infrastructure as Code",
      category: "devops",
      description:
        "Automated cloud infrastructure provisioning and management using Terraform and Ansible.",
      image: "/projects/iac.jpg",
      technologies: ["Terraform", "Ansible", "AWS", "Python", "GitHub Actions"],
      githubLink: "https://github.com/yourusername/project",
      liveLink: null, // Some projects might not have live links
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my work across different domains - from full-stack
            development to AI/ML solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
