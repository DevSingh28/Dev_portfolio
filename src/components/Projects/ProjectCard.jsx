// components/ProjectCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center pb-6 gap-4"
        >
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-5 h-5 text-gray-900" />
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt className="w-5 h-5 text-white" />
            </motion.a>
          )}
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
};

export default ProjectCard;
