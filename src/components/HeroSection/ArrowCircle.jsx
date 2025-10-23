// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function ArrowCircle() {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const arrows = 12; // number of arrows in the circle
//   const radius = 120; // circle radius in px
//   const center = { x: 200, y: 200 }; // circle center (adjust as needed)

//   useEffect(() => {
//     const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-900">
//       <div
//         className="relative"
//         style={{ width: radius * 2, height: radius * 2 }}
//       >
//         {Array.from({ length: arrows }).map((_, i) => {
//           const angle = (i / arrows) * 2 * Math.PI;
//           const x = center.x + Math.cos(angle) * radius - center.x;
//           const y = center.y + Math.sin(angle) * radius - center.y;

//           const dx = mouse.x - (center.x + x);
//           const dy = mouse.y - (center.y + y);
//           const rotation = (Math.atan2(dy, dx) * 180) / Math.PI;

//           return (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 flex items-center justify-center"
//               style={{
//                 top: y + radius,
//                 left: x + radius,
//               }}
//               animate={{ rotate: rotation }}
//               transition={{ type: "spring", stiffness: 120, damping: 15 }}
//             >
//               {/* You can replace this SVG with any arrow icon (even Remix/Framer Motion icon) */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4 text-cyan-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 12h14M12 5l7 7-7 7"
//                 />
//               </svg>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ArrowCircle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerCenter, setContainerCenter] = useState({ x: 0, y: 0 });

  const numberOfArrows = 16;
  const radius = 180;

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateAngle = (arrowX, arrowY) => {
    const deltaX = mousePosition.x - arrowX;
    const deltaY = mousePosition.y - arrowY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  const calculateDistance = (arrowX, arrowY) => {
    const deltaX = mousePosition.x - arrowX;
    const deltaY = mousePosition.y - arrowY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const getArrowPosition = (index) => {
    const angle = (index / numberOfArrows) * 2 * Math.PI;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div ref={containerRef} className="relative ">
        {/* Center Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 shadow-2xl flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.div>

        {/* Arrows */}
        {Array.from({ length: numberOfArrows }).map((_, index) => {
          const position = getArrowPosition(index);
          const arrowX = containerCenter.x + position.x;
          const arrowY = containerCenter.y + position.y;
          const distance = calculateDistance(arrowX, arrowY);
          const scale = Math.max(0.6, Math.min(1.2, 1 - distance / 1000));

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                x: position.x,
                y: position.y,
              }}
              animate={{
                rotate: calculateAngle(arrowX, arrowY),
                scale: scale,
              }}
              transition={{
                rotate: {
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                },
              }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                className="-translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
              >
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrowCircle;
