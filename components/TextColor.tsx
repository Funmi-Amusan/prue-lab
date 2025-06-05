'use client'

import { motion } from "framer-motion";
import clsx from "clsx";
import React, { useState } from 'react'; // Import useState

interface UnifiedTextFillProps {
  texts: string[];
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  strokeClassName?: string;
  strokeWidth?: number;
  duration?: number;
}

export const TextFill = ({
  texts,
  fontSize = "text-7xl",
  fontFamily = "font-yorkgame",
  className = "text-purple-500",
  strokeClassName,
  strokeWidth = 0.5,
  duration = 1.2,
}: UnifiedTextFillProps) => {
  const resolvedStrokeClassName = strokeClassName || className;
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <motion.div
      className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      // No need for initial, whileHover, whileTap, whileFocus on the parent for this approach
    >
      {/* Stroke text layers */}
      <div className="flex flex-col items-center">
        {texts.map((text, index) => (
          <span
            key={`stroke-${index}`}
            className={clsx(
              "block",
              fontSize,
              fontFamily,
              resolvedStrokeClassName
            )}
            style={{
              WebkitTextStroke: `${strokeWidth}px #1C1456`,
              color: "transparent",
              fontWeight: "bold",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Filled text overlay with unified animation - Yellow (last to disappear) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          clipPath: isHovered ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay: isHovered ? 0 : 0.15, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-yellow-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-yellow-${index}`}
              className={clsx(
                "block",
                fontSize,
                fontFamily
              )}
              style={{ fontWeight: "bold" }}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Filled text overlay - Peach */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          clipPath: isHovered ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay: isHovered ? 0.05 : 0.10, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-peach-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-peach-${index}`}
              className={clsx(
                "block",
                fontSize,
                fontFamily
              )}
              style={{ fontWeight: "bold" }}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Filled text overlay - Sky */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          clipPath: isHovered ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay: isHovered ? 0.10 : 0.05, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-sky-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-sky-${index}`}
              className={clsx(
                "block",
                fontSize,
                fontFamily
              )}
              style={{ fontWeight: "bold" }}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Filled text overlay - Purple (first to disappear) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          clipPath: isHovered ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay: isHovered ? 0.15 : 0, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center", className)}>
          {texts.map((text, index) => (
            <span
              key={`fill-purple-${index}`}
              className={clsx(
                "block",
                fontSize,
                fontFamily
              )}
              style={{ fontWeight: "bold" }}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};