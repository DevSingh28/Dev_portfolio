import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiTensorflow,
  SiPytorch,
  SiGooglecloud,
  SiCloudinary,
  SiDjango,
  SiExpress,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiFlask,
  SiKubernetes,
  SiLinux,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isTouchDevice &&
        sectionRef.current &&
        !event.target.closest(".skill-item")
      ) {
        setActiveSkill(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isTouchDevice]);

  const skills = [
    { icon: <FaJsSquare color="#f7df1e" />, name: "JavaScript" },
    { icon: <FaReact color="#61dafb" />, name: "React" },

    { icon: <FaNodeJs color="#68a063" />, name: "Node.js" },
    { icon: <SiExpress color="#888888" />, name: "Express.js" },
    { icon: <FaPython color="#3776ab" />, name: "Python" },
    { icon: <SiDjango color="#092e20" />, name: "Django" },
    { icon: <SiFlask color="#000000" />, name: "Flask" },

    { icon: <SiPytorch color="#ee4c2c" />, name: "PyTorch" },
    { icon: <SiTensorflow color="#ff6f00" />, name: "TensorFlow" },
    { icon: <SiPandas color="#150458" />, name: "Pandas" },
    { icon: <SiNumpy color="#013243" />, name: "NumPy" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <FaDatabase color="#00758F" />, name: "SQL" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },

    { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <FaHtml5 color="#e34f26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572b6" />, name: "CSS3" },
    { icon: <FaGitAlt color="#f1502f" />, name: "Git" },
    { icon: <SiGithub color="#000000" />, name: "GitHub" },
    { icon: <SiDocker color="#0db7ed" />, name: "Docker" },
    { icon: <SiKubernetes color="#326ce5" />, name: "Kubernetes" },

    { icon: <SiGooglecloud color="#4285f4" />, name: "Google Cloud" },
    { icon: <SiCloudinary color="#3448c5" />, name: "Cloudinary" },

    { icon: <SiVercel color="#000000" />, name: "Vercel" },
    { icon: <SiLinux color="#fcc624" />, name: "Linux" },
  ];

  const handleSkillClick = (index, e) => {
    if (isTouchDevice) {
      e.stopPropagation();
      setActiveSkill((prev) => (prev === index ? null : index));
    }
  };

  const handleMouseEnter = (index) => {
    if (!isTouchDevice) {
      setHoveredSkill(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setHoveredSkill(null);
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative pt-16 flex flex-col items-center justify-center text-center font-poppins overflow-hidden max-w-5xl mx-auto"
      style={{ color: "var(--color-text)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-md tracking-widest uppercase font-medium font-spacegrotesk mb-3"
        style={{ color: "var(--color-primary)" }}
      >
        Technologies I Know
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-spacegrotesk"
        style={{ color: "var(--color-text)" }}
      >
        I build full-stack web apps and scalable AI-driven systems using React,
        Node.js, and Python — blending design, data, and functionality.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-8 sm:gap-10 px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            whileHover={!isTouchDevice ? { scale: 1.1 } : {}}
            whileTap={isTouchDevice ? { scale: 0.95 } : {}}
            className="relative flex flex-col items-center cursor-pointer select-none skill-item"
            onClick={(e) => handleSkillClick(index, e)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: "transform" }}
          >
            <div className="text-3xl sm:text-4xl transition-transform duration-200">
              {skill.icon}
            </div>

            <AnimatePresence>
              {((isTouchDevice && activeSkill === index) ||
                (!isTouchDevice && hoveredSkill === index)) && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-7 text-[10px] sm:text-xs bg-[rgba(255,255,255,0.12)] backdrop-blur-md px-3 py-1.5 rounded-full border border-[rgba(0,0,0,0.08)] whitespace-nowrap shadow-lg pointer-events-none z-10"
                  style={{ color: "var(--color-text)" }}
                >
                  {skill.name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
