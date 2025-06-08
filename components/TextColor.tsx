'use client'

import { motion } from "framer-motion";
import clsx from "clsx";
import React from 'react'; 

interface UnifiedTextFillProps {
  texts: string[];
  fontSize: string;
  className?: string;
  strokeClassName?: string;
  strokeWidth?: number;
  duration?: number;
  isHovered?: boolean; // Add isHovered prop
}

export const TextFill = ({
  texts,
  fontSize,
  className = "text-primary",
  strokeClassName,
  duration = 1.2,
  isHovered = false, // Add isHovered prop
}: UnifiedTextFillProps) => {
  const resolvedStrokeClassName = strokeClassName || className;

  return (
    <motion.div
      className="relative inline-block"
    >
      {/* Stroke text layers */}
      <div className="flex flex-col items-center">
        {texts.map((text, index) => (
          <span
            key={`stroke-${index}`}
            className={clsx(
              "block font-yorkgame",
              fontSize,
              resolvedStrokeClassName
            )}
            style={{
              WebkitTextStroke: `1px #1C1456`,
              color: "#fbfaf9",
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
          delay: isHovered ? 0 : 0.12, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-yellow-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-yellow-${index}`}
              className={clsx(
                "block font-yorkgame",
                fontSize,
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
          delay: isHovered ? 0.05 : 0.08, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-peach-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-peach-${index}`}
              className={clsx(
                "block font-yorkgame",
                fontSize,
                
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
          delay: isHovered ? 0.10 : 0.04, // Delay for appearance, reversed delay for disappearance
        }}
      >
        <div className={clsx("flex flex-col items-center text-sky-300")}>
          {texts.map((text, index) => (
            <span
              key={`fill-sky-${index}`}
              className={clsx(
                "block font-yorkgame",
                fontSize,
                
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
                "block font-yorkgame",
                fontSize,
                
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