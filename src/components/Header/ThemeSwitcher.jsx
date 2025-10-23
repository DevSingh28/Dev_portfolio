import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaChevronDown } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { themes, currentTheme, changeTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-4 z-[9999] flex flex-col items-end">
      {/* === Toggle Button === */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="p-3 rounded-full shadow-lg flex items-center gap-2"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-text)",
        }}
      >
        <FaPalette />
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </motion.button>

      {/* === Theme Dropdown === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="theme-dropdown"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute bottom-14 right-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
            }}
          >
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Choose Theme
              </div>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      changeTheme(theme.id);
                      setOpen(false);
                    }}
                    className="p-2 rounded-md text-xs font-medium text-left transition-all"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      border:
                        currentTheme === theme.id
                          ? `2px solid ${theme.colors.primary}`
                          : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      className="w-full h-3 rounded mb-2"
                      style={{
                        background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      }}
                    />
                    {theme.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
