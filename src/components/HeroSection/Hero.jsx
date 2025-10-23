import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-fit mt-12 md:mt-16 lg:mt-24 flex flex-col font-poppins relative overflow-hidden items-center justify-center text-center mx-auto"
      style={{ color: "var(--color-text)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -left-40 -top-40 w-[900px] h-[700px] rounded-full blur-3xl lg:blur-3xl"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.6, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-1), transparent 45%)",
            mixBlendMode: "screen",
            willChange: "opacity",
          }}
        />
        <motion.div
          className="absolute -right-40 top-6 w-[700px] h-[520px] rounded-full blur-2xl lg:blur-2xl"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.38, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-2), transparent 45%)",
            mixBlendMode: "screen",
            willChange: "opacity",
          }}
        />
      </div>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-30">
        <a
          href="/DevSingh_Resume.pdf"
          download
          className="pointer-events-none relative flex items-center gap-2 px-3 py-2 rounded-full overflow-hidden transition-all duration-300"
          style={{
            color: "var(--color-text)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[var(--color-primary)] animate-borderMove"></span>

          <span className="text-xs relative z-10 font-spacegrotesk ">
            Download CV
          </span>
        </a>

        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent) ",
          }}
        />
        <div className="flex flex-col items-center gap-3">
          <motion.a
            href="https://github.com/DevSingh28"
            target="_blank"
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.3 }}
            whileHover={{ x: 6 }}
            className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.06)] transition-all duration-200"
            style={{ color: "var(--color-text)", willChange: "transform" }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dev-singh-2b3541275/"
            target="_blank"
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            whileHover={{ x: 6 }}
            className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.06)] transition-all duration-200"
            style={{ color: "var(--color-text)", willChange: "transform" }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/dev.singh2002/"
            target="_blank"
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.16, duration: 0.3 }}
            whileHover={{ x: 6 }}
            className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.06)] transition-all duration-200"
            style={{ color: "var(--color-text)", willChange: "transform" }}
            aria-label="Twitter"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="/DevSingh_Resume.pdf"
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.16, duration: 0.3 }}
            whileHover={{ x: 6 }}
            className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.06)] transition-all duration-200"
            style={{ color: "var(--color-text)", willChange: "transform" }}
            aria-label="Twitter"
          >
            <FaDownload />
          </motion.a>
        </div>
        <div
          className="w-px h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)",
          }}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-30 flex items-center gap-3 bg-[rgba(255,255,255,0.08)] backdrop-blur-xl px-4 py-3 rounded-full border border-[rgba(0,0,0,0.08)] shadow-lg"
      >
        <a
          href="/DevSingh_Resume.pdf"
          download
          className="p-2 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] border border-[rgba(0,0,0,0.06)] transition-colors duration-200"
          style={{ color: "var(--color-text)" }}
          aria-label="Download CV"
        >
          <FaDownload className="text-sm" />
        </a>
        <div className="w-px h-6" style={{ background: "rgba(0,0,0,0.1)" }} />
        <a
          href="https://github.com/DevSingh28"
          target="_blank"
          className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
          style={{ color: "var(--color-text)" }}
          aria-label="GitHub"
        >
          <FaGithub className="text-sm" />
        </a>
        <a
          href="https://www.linkedin.com/in/dev-singh-2b3541275/"
          target="_blank"
          className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
          style={{ color: "var(--color-text)" }}
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-sm" />
        </a>
        <a
          href="https://www.instagram.com/dev.singh2002/"
          target="_blank"
          className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
          style={{ color: "var(--color-text)" }}
          aria-label="Twitter"
        >
          <FaInstagram className="text-sm" />
        </a>
      </motion.div>

      <main className="z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:pb-0 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm mb-4 font-spacegrotesk"
            style={{
              color: "var(--color-text)",
              willChange: "transform, opacity",
            }}
          >
            Hello, I'm{" "}
            <span
              className="font-medium underline"
              style={{ color: "var(--color-primary)" }}
            >
              Dev Singh
            </span>
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl text-2xl md:text-3xl lg:text-4xl  font-outfit"
            style={{ color: "var(--color-text)" }}
          >
            <span style={{ color: "var(--color-heading)" }}>
              Full Stack Developer
            </span>
            , AI &amp; ML Enthusiast,
            <br />
            passionate about building intelligent{" "}
            <span
              className="font-playfair italic"
              style={{ color: "var(--color-primary)" }}
            >
              web solutions
            </span>
            <span style={{ color: "var(--color-accent)", marginLeft: 6 }}>
              *
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-spacegrotesk"
            style={{ color: "var(--color-text)" }}
          >
            I specialize in creating scalable and efficient full-stack
            applications using React, Node.js, and Python — with hands-on
            experience in deploying intelligent systems leveraging TensorFlow,
            PyTorch, and Scikit-learn.
          </motion.p>
        </motion.div>
      </main>
    </section>
  );
}
