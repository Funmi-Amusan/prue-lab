'use client'

import { motion } from "framer-motion";
import clsx from "clsx";
import React from 'react'; 

interface UnifiedTextFillProps {
  texts: string[];
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  strokeClassName?: string;
  strokeWidth?: number;
  duration?: number;
  isHovered?: boolean; // Add isHovered prop
}

export const TextFillGray = ({
  texts,
  fontSize = "text-7xl",
  fontFamily = "font-yorkgame",
  duration = 0.5,
  isHovered = false, // Add isHovered prop
}: UnifiedTextFillProps) => {

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
              "block",
              fontSize,
              fontFamily,
            )}
            aria-hidden="true"
          >
            {text}
          </span>
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          clipPath: isHovered ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay:  0 , 
        }}
      >
        <div className={clsx("flex flex-col items-center text-gray-400")}>
          {texts.map((text, index) => (
            <span
              key={`fill-gray-${index}`}
              className={clsx(
                "block",
                fontSize,
                fontFamily
              )}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};