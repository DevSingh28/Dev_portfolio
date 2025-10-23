import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 px-6 sm:px-10 lg:px-20 font-poppins overflow-hidden"
      style={{ color: "var(--color-text)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[-200px] top-[100px] w-[600px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-2), transparent 60%)",
            mixBlendMode: "screen",
          }}
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-spacegrotesk"
          style={{ color: "var(--color-text)" }}
        >
          {" "}
          Starting my professional journey as a Full Stack Developer and growing
          through hands-on project experience.
        </motion.p>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.15)] transition-all duration-500"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[rgba(255,255,255,0.08)] to-transparent opacity-10"
            animate={{ opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-base sm:text-lg font-spacegrotesk leading-snug tracking-tight">
                Full Stack Developer{" "}
                <span
                  className="font-normal opacity-90"
                  style={{ color: "var(--color-primary)" }}
                >
                  @ Intechnative Systems and Solutions
                </span>
              </h3>
              <span className="text-[11px] sm:text-xs font-medium opacity-70 mt-1 sm:mt-0 whitespace-nowrap">
                Jan 2025 – Present · Noida, Uttar Pradesh
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl opacity-85 text-sm  leading-relaxed font-spacegrotesk"
              style={{ color: "var(--color-text)" }}
            >
              Currently working as a Full Stack Developer, focusing on building
              modern, responsive, and efficient web applications. Contributing
              to both frontend and backend systems, integrating APIs, and
              ensuring smooth user experiences through scalable architecture and
              optimized performance.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
