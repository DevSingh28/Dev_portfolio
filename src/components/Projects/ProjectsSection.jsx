import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiCloudinary,
} from "react-icons/si";

const projectsData = [
  {
    id: "p1",
    title: "SonicPlay",
    description:
      "A music streaming platform built with the MERN stack and Framer Motion for fluid UI transitions. Integrated Cloudinary for seamless song uploads, playlist creation, and ad-free listening.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Framer Motion"],
    image: "/SonicPlay_App.png",
    github: "https://github.com/DevSingh28/splay_frontend",
    live: "https://sonicplay.netlify.app/",
    category: "Full Stack",
  },
  {
    id: "p2",
    title: "SpendTracker",
    description:
      "A full-stack expense management app using React, Node.js, and MongoDB. Features JWT auth, smart budget alerts, interactive charts, and a mobile-friendly interface with smooth animations.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/SpendTracker_App.png",
    github: "https://github.com/DevSingh28/spendtrack_frontend",
    live: "https://spendtrackerr.netlify.app/",
    category: "Full Stack",
  },
  {
    id: "p3",
    title: "Flowrone Interior",
    description:
      "Developed a modern client website using React, Tailwind CSS, and Framer Motion. Showcases elegant animations, service sections, and a responsive portfolio for a professional brand identity.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/Flowrone_App.png",
    github: "https://github.com/DevSingh28/Flowrone_Interior",
    live: "https://flowroneinterior.com/",
    category: "Full Stack",
  },
  {
    id: "p4",
    title: "Image Classification",
    description:
      "Trained a TensorFlow-based model to classify 550 bird species. Achieved 92% accuracy through fine-tuning, data preprocessing, and optimization for efficient performance.",
    tech: ["Python", "TensorFlow"],
    image: "/Image_Classification_App.png",
    github: "https://github.com/DevSingh28/Birds_classification",
    live: "https://huggingface.co/spaces/TheRock99/Birds_Classify",
    category: "AI/ML",
  },
  {
    id: "p5",
    title: "Image Generator (DCGAN)",
    description:
      "Built a Deep Convolutional GAN using PyTorch to generate synthetic anime faces. Trained and fine-tuned generator-discriminator models with data augmentation for improved diversity and realism.",
    tech: ["Python", "PyTorch"],
    image: "/Image_generator_App.png",
    github: "https://github.com/DevSingh28/DCGAN_IMAGE_GENERATOR",
    live: "https://huggingface.co/spaces/TheRock99/DCGAN_Image_Generator",
    category: "AI/ML",
  },
  {
    id: "p6",
    title: "Text Generation Model",
    description:
      "Developed a GPT-inspired text generator using PyTorch, trained on the Daily Dialogue dataset. Implemented attention and positional encoding to produce coherent, context-aware responses.",
    tech: ["Python", "PyTorch"],
    image: "/Text_Generation_app.png",
    github: "https://github.com/DevSingh28/Text_Generation",
    live: "https://huggingface.co/spaces/TheRock99/Text_Generator",
    category: "AI/ML",
  },
];

const categories = ["Full Stack", "AI/ML", "All"];

const techIcons = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Tailwind: SiTailwindcss,
  "Framer Motion": SiFramer,
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Cloudinary: SiCloudinary,
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Full Stack");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = projectsData.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="relative pb-20 px-6 sm:px-10 lg:px-20 font-poppins overflow-hidden"
      style={{ color: "var(--color-text)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-[-200px] top-[150px] w-[600px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-1), transparent 60%)",
            mixBlendMode: "screen",
          }}
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-md tracking-widest uppercase font-medium font-spacegrotesk mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-spacegrotesk"
          style={{ color: "var(--color-text)" }}
        >
          A showcase of real-world projects — from AI innovations to modern
          full-stack applications.
        </motion.p>
      </motion.div>

      <div className="flex justify-center mb-16">
        <div className="relative backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full p-2 flex gap-2 sm:gap-3 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative px-4 sm:px-6 cursor-pointer py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "text-[var(--color-primary)]"
                  : "text-gray-300 hover:text-[var(--color-primary)]"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 border border-[var(--color-primary)]"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `linear-gradient(135deg, var(--blob-1) 0%, var(--blob-2) 50%, var(--blob-3) 100%)`,
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--blob-1) 100%)`,
                  opacity: 0,
                }}
                animate={{
                  opacity: hoveredId === project.id ? 0.15 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 items-center min-h-[320px] sm:min-h-[360px]">
                <div className="space-y-4 z-10">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl font-bold leading-tight font-playfair italic underline"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs sm:text-sm opacity-90 leading-relaxed max-w-md font-spacegrotesk"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-5 pt-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      {project.tech.slice(0, 4).map((tech) => {
                        const Icon = techIcons[tech];
                        return Icon ? (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.2, y: -2 }}
                            className="text-lg sm:text-xl opacity-80 hover:opacity-100 transition-opacity"
                            title={tech}
                          >
                            <Icon />
                          </motion.div>
                        ) : null;
                      })}
                    </div>
                    <div className="flex items-center gap-3 ml-auto">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="p-2 rounded-lg bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[var(--color-primary)]/30 transition-all text-base border border-[rgba(255,255,255,0.1)]"
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="p-2 rounded-lg bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[var(--color-primary)]/30 transition-all text-base border border-[rgba(255,255,255,0.1)]"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.4, duration: 0.2 }}
                  className="relative lg:justify-self-end w-full max-w-sm sm:max-w-md lg:max-w-md"
                >
                  <motion.div
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    animate={{
                      scale: hoveredId === project.id ? 0.85 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: `linear-gradient(135deg, var(--color-primary) 0%, transparent 60%)`,
                        }}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      }}
                    />
                  </motion.div>
                  <div
                    className="absolute -bottom-4 left-4 right-4 h-8 rounded-full blur-2xl opacity-50 -z-10"
                    style={{
                      background: "var(--color-primary)",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
