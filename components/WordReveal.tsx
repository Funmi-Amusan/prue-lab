import { motion } from "framer-motion"
import React from "react"

const WordReveal = ({ texts, className }: { texts: string[], className?: string }) => {
  return (
    <div className={`${className}`}>
      {texts.map((line, lineIndex) => (
        <motion.span
          key={lineIndex}
          className= {`block text-center `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: lineIndex * 0.8 }}
        >
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: charIndex * 0.06 + lineIndex * 0.8,
                    ease: "easeInOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.span>
      ))}
    </div>
  )
}

export default WordReveal
