import React from "react";

const HighlightedText = ({ text }: { text: string }) => {
  return (
    <div className="relative w-fit mx-auto">
      {/* SVG Highlight Effect */}
      <svg
        width="100%"
        height="50"
        viewBox="0 0 400 50"
        className="absolute left-0 top-0"
      >
        <defs>
          <filter id="softBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Irregular Highlight Shape */}
        <path
          d="M 10 35 Q 50 10, 120 25 T 280 30 T 380 20"
          fill="red" /* Yellow highlight color */
          
        />
      </svg>

      {/* Text */}
      <p className="relative text-xl uppercase text-center font-yorkgame p-2 w-fit">
        {text}
      </p>
    </div>
  );
};

export default HighlightedText;
