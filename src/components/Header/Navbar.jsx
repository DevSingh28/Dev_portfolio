// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { Link } from "react-scroll";
// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const menu = [
//     { name: "Home", to: "hero" },
//     { name: "Gallery", to: "gallery" },
//     { name: "Why Choose Us", to: "whychooseus" },
//     { name: "Solutions", to: "solutions" },
//     { name: "Contact", to: "contact" },
//   ];
//   return (
//     <>
//       <nav
//         className="relative transition-colors duration-300 bg-transparent"
//         // style={{ backgroundColor: "var(--color-background)" }}
//       >
//         <div className="flex items-center justify-between max-w-[95%] mx-auto h-16">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-3"
//           >
//             <span
//               style={{ color: "var(--color-primary)" }}
//               className="text-2xl md:text-3xl lg:text-4xl font-semibold"
//             >
//               Flowrone
//             </span>
//           </motion.div>
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="hidden md:flex items-center gap-x-10"
//           >
//             {menu.map((m, i) => (
//               <motion.li
//                 key={m.name}
//                 whileHover={{ y: -2 }}
//                 transition={{ duration: 0.2 }}
//                 className="relative font-medium cursor-pointer mt-2"
//               >
//                 <Link
//                   to={m.to}
//                   smooth
//                   duration={600}
//                   offset={-64}
//                   className="relative text-sm lg:text-base transition-colors duration-300"
//                   style={{ color: "var(--color-text)" }}
//                 >
//                   {m.name}
//                   <span
//                     className="absolute left-0 bottom-[-3px] h-[2px] w-0 transition-all duration-300 group-hover:w-full"
//                     style={{ backgroundColor: "var(--color-accent)" }}
//                   />
//                 </Link>
//               </motion.li>
//             ))}
//           </motion.ul>
//           <button
//             onClick={() => setOpen((v) => !v)}
//             className="md:hidden z-50 relative p-2"
//             style={{ color: "var(--color-text)" }}
//           >
//             <AnimatePresence mode="wait">
//               {open ? (
//                 <motion.div
//                   key="close"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.15 }}
//                 >
//                   <RiCloseLine size={24} />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.15 }}
//                 >
//                   <RiMenu3Line size={24} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </button>
//         </div>
//       </nav>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-40 md:hidden"
//             style={{ backgroundColor: "var(--color-background)" }}
//           >
//             <div className="flex flex-col items-center justify-center h-full space-y-12">
//               {menu.map((m, i) => (
//                 <motion.div
//                   key={m.name}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: i * 0.03 }}
//                   className="relative"
//                 >
//                   <Link
//                     to={m.to}
//                     smooth
//                     duration={600}
//                     offset={-64}
//                     onClick={() => setOpen(false)}
//                     className="text-3xl font-medium cursor-pointer block"
//                     style={{ color: "var(--color-text)" }}
//                   >
//                     {m.name}
//                     <span
//                       className="absolute left-0 -bottom-2 w-0 h-[2px] group-hover:w-full transition-all duration-300 ease-out"
//                       style={{ backgroundColor: "var(--color-accent)" }}
//                     />
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = [
    { name: "Home", to: "hero" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
  ];

  return (
    <>
      <nav className="relative transition-colors duration-300 bg-transparent">
        <div className="flex items-center justify-between max-w-[95%] mx-auto h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="flex items-center"
          >
            <div
              aria-label="Dev Singh logo"
              className="w-12 h-12 text-2xl  flex items-center justify-center font-bold select-none text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DS
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="hidden md:flex items-center gap-x-6 font-spacegrotesk"
          >
            {menu.map((m) => (
              <motion.li
                key={m.name}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className="relative font-medium cursor-pointer mt-1 group"
              >
                <Link
                  to={m.to}
                  smooth
                  duration={600}
                  offset={-64}
                  className="relative text-sm lg:text-base transition-colors duration-200"
                  style={{ color: "var(--color-text)" }}
                >
                  {m.name}
                  <span
                    className="absolute left-0 bottom-[-4px] h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                </Link>
              </motion.li>
            ))}

            <li>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-64}
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-2 py-1 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{
                    border: "1px solid var(--color-primary)",

                    boxShadow: "0 8px 20px var(--elev-shadow)",
                  }}
                >
                  Contact
                </motion.button>
              </Link>
            </li>
          </motion.ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden z-50 relative p-2"
            style={{ color: "var(--color-text)" }}
            aria-label="menu toggle"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <RiCloseLine size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <RiMenu3Line size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menu.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="relative"
                >
                  <Link
                    to={m.to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-medium cursor-pointer block"
                    style={{ color: "var(--color-text)" }}
                  >
                    {m.name}
                    <span
                      className="absolute left-0 -bottom-2 w-0 h-[2px] group-hover:w-full transition-all duration-300 ease-out"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: menu.length * 0.04 }}
                className="mt-4"
              >
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-64}
                  onClick={() => setOpen(false)}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-lg text-lg font-semibold"
                    style={{
                      background: "var(--color-primary)",
                      color: "#fff",
                      boxShadow: "0 10px 28px var(--elev-shadow)",
                    }}
                  >
                    Contact
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
