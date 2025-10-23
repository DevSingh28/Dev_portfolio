// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const RevealLine = ({ className = "" }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   const lines = [
//     { width: "100%", delay: 0, gradient: "from-cyan-400 to-blue-500" },
//     { width: "80%", delay: 0.2, gradient: "from-purple-400 to-pink-500" },
//     { width: "60%", delay: 0.4, gradient: "from-orange-400 to-red-500" },
//   ];

//   return (
//     <div
//       ref={ref}
//       className={`relative w-full flex flex-col items-center gap-4 py-20 ${className}`}
//     >
//       {lines.map((line, index) => (
//         <motion.div
//           key={index}
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//           transition={{ duration: 1, delay: line.delay, ease: "easeOut" }}
//           style={{ width: line.width }}
//           className={`h-[2px] bg-gradient-to-r ${line.gradient} origin-center`}
//         />
//       ))}
//     </div>
//   );
// };

// export default RevealLine;

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const HorizontalLine = ({
  direction = "center",
  color = "cyan",
  className = "",
}) => {
  const ref = useRef(null);
  const [hasTarget, setHasTarget] = useState(false);
  useEffect(() => {
    if (ref.current) setHasTarget(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: hasTarget ? ref : undefined,
    offset: ["start end", "end start"],
  });
  const fallback = useMotionValue(0);
  const scrollVal = scrollYProgress ?? fallback;
  const scaleX = useSpring(scrollVal, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const getTransformOrigin = () => {
    switch (direction) {
      case "left":
        return "left center";
      case "right":
        return "right center";
      default:
        return "center center";
    }
  };
  const gradientColors = {
    cyan: "from-cyan-400 via-blue-500 to-purple-500",
    blue: "from-blue-400 via-sky-500 to-cyan-500",
    purple: "from-purple-400 via-pink-500 to-rose-500",
    green: "from-green-400 via-emerald-500 to-teal-500",
    orange: "from-orange-400 via-amber-500 to-yellow-500",
  };
  return (
    <div ref={ref} className={`relative w-full h-px ${className}`}>
      <motion.div
        className={`h-full bg-gradient-to-r ${gradientColors[color]} rounded-full`}
        style={{
          scaleX,
          transformOrigin: getTransformOrigin(),
        }}
      />
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradientColors[color]} rounded-full blur-sm opacity-0`}
        style={{
          scaleX,
          transformOrigin: getTransformOrigin(),
          opacity: useTransform(scrollVal, [0, 0.5, 1], [0, 0.8, 0]),
        }}
      />
    </div>
  );
};

const VerticalLine = ({
  direction = "top",
  color = "cyan",
  className = "",
}) => {
  const ref = useRef(null);
  const [hasTarget, setHasTarget] = useState(false);
  useEffect(() => {
    if (ref.current) setHasTarget(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: hasTarget ? ref : undefined,
    offset: ["start end", "end start"],
  });
  const fallback = useMotionValue(0);
  const scrollVal = scrollYProgress ?? fallback;
  const scaleY = useSpring(scrollVal, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const getTransformOrigin = () => {
    return direction === "bottom" ? "center bottom" : "center top";
  };
  const gradientColors = {
    cyan: "from-cyan-400 via-blue-500 to-purple-500",
    blue: "from-blue-400 via-sky-500 to-cyan-500",
    purple: "from-purple-400 via-pink-500 to-rose-500",
    green: "from-green-400 via-emerald-500 to-teal-500",
    orange: "from-orange-400 via-amber-500 to-yellow-500",
  };
  return (
    <div ref={ref} className={`relative w-px h-64 ${className}`}>
      <motion.div
        className={`w-full bg-gradient-to-b ${gradientColors[color]} rounded-full`}
        style={{
          scaleY,
          transformOrigin: getTransformOrigin(),
        }}
      />
      <motion.div
        className={`absolute inset-0 w-full bg-gradient-to-b ${gradientColors[color]} rounded-full blur-sm opacity-0`}
        style={{
          scaleY,
          transformOrigin: getTransformOrigin(),
          opacity: useTransform(scrollVal, [0, 0.5, 1], [0, 0.8, 0]),
        }}
      />
    </div>
  );
};

const ScrollRevealDivider = ({
  variant = "horizontal",
  direction = "center",
  color = "cyan",
  thickness = "2",
  withGlow = true,
  className = "",
}) => {
  const ref = useRef(null);
  const [hasTarget, setHasTarget] = useState(false);
  useEffect(() => {
    if (ref.current) setHasTarget(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: hasTarget ? ref : undefined,
    offset: ["start end", "end start"],
  });
  const fallback = useMotionValue(0);
  const scrollVal = scrollYProgress ?? fallback;
  const scale = useSpring(scrollVal, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const gradientColors = {
    cyan: "from-cyan-400 via-blue-500 to-purple-500",
    blue: "from-blue-400 via-sky-500 to-cyan-500",
    purple: "from-purple-400 via-pink-500 to-rose-500",
    green: "from-green-400 via-emerald-500 to-teal-500",
    orange: "from-orange-400 via-amber-500 to-yellow-500",
  };
  const thicknessClasses = { 1: "h-0.5", 2: "h-1", 3: "h-1.5", 4: "h-2" };
  if (variant === "vertical") {
    return (
      <VerticalLine direction={direction} color={color} className={className} />
    );
  }
  return (
    <div
      ref={ref}
      className={`relative w-full ${thicknessClasses[thickness]} ${className}`}
    >
      <motion.div
        className={`w-full bg-gradient-to-r ${
          gradientColors[color]
        } rounded-full ${withGlow ? "shadow-lg" : ""}`}
        style={{
          scaleX: scale,
          transformOrigin:
            direction === "center"
              ? "center center"
              : direction === "left"
              ? "left center"
              : "right center",
        }}
      />
      {withGlow && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradientColors[color]} rounded-full blur-md`}
          style={{
            scaleX: scale,
            transformOrigin:
              direction === "center"
                ? "center center"
                : direction === "left"
                ? "left center"
                : "right center",
            opacity: useTransform(scrollVal, [0, 0.5, 1], [0, 0.6, 0]),
          }}
        />
      )}
    </div>
  );
};

const EnhancedSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Full Stack");
  const skillCategories = {
    "Full Stack": [
      { name: "React", icon: <SiReact className="text-sky-400" />, level: 90 },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
        level: 85,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-400" />,
        level: 80,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        level: 75,
      },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 70 },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-cyan-400" />,
        level: 95,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
        level: 95,
      },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" />, level: 90 },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: 88,
      },
    ],
    "Data Science": [
      {
        name: "Python",
        icon: <SiPython className="text-yellow-400" />,
        level: 85,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-500" />,
        level: 70,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="text-red-500" />,
        level: 65,
      },
    ],
    DevOps: [
      {
        name: "Docker",
        icon: <SiDocker className="text-sky-400" />,
        level: 75,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="text-blue-500" />,
        level: 60,
      },
      {
        name: "Jenkins",
        icon: <SiJenkins className="text-red-500" />,
        level: 55,
      },
    ],
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Technologies I work with to create amazing digital experiences
          </p>
          <ScrollRevealDivider
            color="cyan"
            direction="center"
            thickness={2}
            withGlow={true}
            className="mb-12"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.keys(skillCategories).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(tab)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
                activeCategory === tab
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/25"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 bg-gray-800/50"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <ScrollRevealDivider
          color="blue"
          direction="center"
          thickness={1}
          withGlow={false}
          className="mb-16 opacity-60"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {skillCategories[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-cyan-400 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollRevealDivider
          color="purple"
          direction="center"
          thickness={2}
          withGlow={true}
          className="mt-16"
        />

        <div className="flex items-center justify-center space-x-8 mt-20">
          <ScrollRevealDivider
            variant="vertical"
            direction="top"
            color="cyan"
            className="h-32"
          />
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            Next Section
          </span>
          <ScrollRevealDivider
            variant="vertical"
            direction="top"
            color="cyan"
            className="h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;
export { ScrollRevealDivider, HorizontalLine, VerticalLine };
