import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative pb-20 px-6 sm:px-10 lg:px-20 font-poppins overflow-hidden"
      style={{ color: "var(--color-text)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[-150px] top-[100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-1), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-100px] bottom-[50px] w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, var(--blob-2), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-md tracking-widest uppercase font-medium font-spacegrotesk mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Let's Work Together
          </motion.h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto opacity-80 leading-relaxed"></p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-spacegrotesk"
            style={{ color: "var(--color-text)" }}
          >
            Have a project in mind or just want to chat? Drop me a message and
            I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="relative p-8 sm:p-10 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
              }}
            >
              {/* Gradient shine effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, transparent 50%)`,
                }}
              />
              <input type="hidden" name="form-name" value="contact" />

              <div className="relative space-y-6">
                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 opacity-90"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "var(--color-text)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-primary)";
                        e.target.style.boxShadow = `0 0 0 3px rgba(var(--color-primary-rgb), 0.1)`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 opacity-90"
                  >
                    What do you want to discuss?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, ideas, or just say hi..."
                    className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "var(--color-text)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = `0 0 0 3px rgba(var(--color-primary-rgb), 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--blob-1))`,
                    color: "#000",
                    boxShadow: `0 4px 20px rgba(var(--color-primary-rgb), 0.1)`,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-sm text-center"
                    style={{
                      background: "rgba(34, 197, 94, 0.1)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      color: "#22c55e",
                    }}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>

          {/* Right side - Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                className="text-base font-semibold mb-2 font-spacegrotesk"
                style={{ color: "var(--color-primary)" }}
              >
                Quick Response
              </h3>
              <p className="text-xs opacity-75 leading-relaxed font-spacegrotesk">
                I typically respond within 24 hours. Looking forward to hearing
                about your project!
              </p>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-5 rounded-xl py-5"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                className="text-base font-semibold mb-2 font-spacegrotesk"
                style={{ color: "var(--color-primary)" }}
              >
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/DevSingh28",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/dev-singh-2b3541275/",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/dev.singh2002/",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    title={label}
                  >
                    <Icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative p-6 rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--blob-1), var(--blob-2))`,
                opacity: 0.8,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background: `linear-gradient(45deg, transparent 30%, var(--blob-3) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                }}
              />
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-3xl mb-2"
                >
                  ✨
                </motion.div>
                <p className="text-xs font-medium leading-relaxed font-spacegrotesk">
                  Open to freelance opportunities
                  <br />
                  and collaborations
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
