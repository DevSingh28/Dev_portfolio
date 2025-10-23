// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoColorPaletteOutline } from "react-icons/io5";
// import { useTheme } from "./ThemeContext";

// const ThemeSelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { themes, currentTheme, setCurrentTheme } = useTheme();

//   const themeNames = {
//     ocean: "Ocean Blue",
//     sunset: "Sunset Glow",
//     forest: "Forest Green",
//     lavender: "Lavender Dream",
//     midnight: "Midnight Dark",
//     coral: "Coral Reef",
//   };

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             transition={{ duration: 0.2 }}
//             className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px]"
//           >
//             <p
//               className="text-sm font-semibold mb-3"
//               style={{ color: "var(--color-text)" }}
//             >
//               Choose Theme
//             </p>
//             <div className="grid grid-cols-2 gap-3">
//               {Object.entries(themes).map(([key, colors]) => (
//                 <motion.button
//                   key={key}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setCurrentTheme(key);
//                     setIsOpen(false);
//                   }}
//                   className={`relative group rounded-lg p-3 transition-all duration-200 ${
//                     currentTheme === key ? "ring-2 ring-offset-2" : ""
//                   }`}
//                   style={{
//                     backgroundColor: colors.background,
//                     borderColor: colors.primary,
//                     "--ring-color": colors.primary,
//                   }}
//                 >
//                   <div className="flex items-center gap-2 mb-2">
//                     <div
//                       className="w-4 h-4 rounded-full"
//                       style={{ backgroundColor: colors.primary }}
//                     />
//                     <div
//                       className="w-4 h-4 rounded-full"
//                       style={{ backgroundColor: colors.secondary }}
//                     />
//                     <div
//                       className="w-4 h-4 rounded-full"
//                       style={{ backgroundColor: colors.accent }}
//                     />
//                   </div>
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: colors.text }}
//                   >
//                     {themeNames[key]}
//                   </span>
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         whileHover={{ scale: 1.1, rotate: 180 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
//         style={{
//           backgroundColor: "var(--color-primary)",
//           color: "var(--color-background)",
//         }}
//       >
//         <IoColorPaletteOutline size={24} />
//       </motion.button>
//     </div>
//   );
// };

// export default ThemeSelector;
