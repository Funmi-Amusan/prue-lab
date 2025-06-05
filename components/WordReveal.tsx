import { motion } from 'framer-motion'
import React from 'react'

const WordReveal = ({text}: {text: string}) => {
  return (
    <span className="text-primary font-bold font-yorkgame text-7xl">
            {text.split("").map((word: string, index: number) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
  )
}

export default WordReveal