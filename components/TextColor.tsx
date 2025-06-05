import { motion, Variants } from "framer-motion";
import clsx from "clsx";

export type FillDirection = "fromTop" | "fromBottom" | "fromLeft" | "fromRight";

interface TextFillMotionProps {
  text: string;
  fontSize?: number | string; 
  fontFamily?: string;
  className?: string; // Applied to the root, provides fill text color & layout (e.g., "text-blue-500 w-64")
  strokeClassName?: string; // Optional: for stroke color (e.g., "text-red-500"). Defaults to using color from `className`.
  strokeWidth?: number; // Default: 0.5 (to match original SVG example)
  fillDirection?: FillDirection; // Direction of the fill animation on hover
  duration?: number; // Duration of the fill animation
}

const getClipPathVariants = (direction: FillDirection): Variants => {
  let initialClipPath: string;
  const hoverClipPath = "inset(0% 0% 0% 0%)"; // Fully revealed

  switch (direction) {
    case "fromTop": // Reveals from top to bottom
      initialClipPath = "inset(0% 0% 100% 0%)"; // Starts clipped from the bottom edge, 0 height at top
      break;
    case "fromLeft": // Reveals from left to right
      initialClipPath = "inset(0% 100% 0% 0%)"; // Starts clipped from the right edge, 0 width at left
      break;
    case "fromRight": // Reveals from right to left
      initialClipPath = "inset(0% 0% 0% 100%)"; // Starts clipped from the left edge, 0 width at right
      break;
    case "fromBottom": // Reveals from bottom to top (default)
    default:
      initialClipPath = "inset(100% 0% 0% 0%)"; // Starts clipped from the top edge, 0 height at bottom
      break;
  }

  return {
    initial: { clipPath: initialClipPath },
    hover: { clipPath: hoverClipPath },
  };
};

export const TextFillMotion = ({
  text,
  fontSize,
  fontFamily,
  className,
  strokeClassName,
  strokeWidth = 0.5,
  fillDirection = "fromBottom", 
  duration = 0.5, 
}: TextFillMotionProps) => {
  const rootTextStyles = {
    fontSize,
    fontFamily,
    fontWeight: "bold", 
  };

  const resolvedStrokeClassName = strokeClassName || className;

  return (
    <motion.div
      className={clsx(
        "relative inline-block group", 
        className 
      )}
      style={rootTextStyles} 
      whileHover="hover"
      initial="initial"
      aria-label={text} 
    >
      <span
        className={clsx(
          "block", 
          resolvedStrokeClassName, 
        )}
        style={{
          WebkitTextStroke: `${strokeWidth}px purple`, // CSS for text stroke
          color: "transparent",
        }}
        aria-hidden="true" 
      >
        {text}
      </span>

      <motion.div
        className={clsx(
          "absolute top-0 left-0 w-full h-full overflow-hidden", 
          className, 
        )}
        variants={getClipPathVariants(fillDirection)}
        transition={{ duration, ease: "easeInOut" }}
      >
        <span className="block"> 
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
};