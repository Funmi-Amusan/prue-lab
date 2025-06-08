'use client'

import { TextFill } from '@/components/TextColor'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const JoinUs = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='min-h-screen relative bg-background flex flex-col gap-4 items-center justify-center'>
      <div className='relative z-20 flex flex-col gap-4 items-center justify-center group w-full h-full'
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='relative z-20 flex flex-col gap-4 items-center justify-center w-full h-full' >
        <TextFill 
          texts={['BECOME A', 'FRANCHISE OWNER']}
          className="text-primary"
          fontSize="text-9xl"
          fontFamily="font-yorkgame"
          duration={0.5}
          isHovered={isHovered}
        />
        <p className='max-w-lg text-center'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
        </div>
        
        {/* Animated hover elements */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 w-full h-full"
            >
              <motion.div variants={itemVariants}>
                <Image 
                  src="/shapes/Star 5.svg" 
                  alt="splatter" 
                  className="h-screen w-auto z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                  aria-hidden="true" 
                  width={100} 
                  height={100} 
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image 
                  src="/shapes/peach-squiggle.svg" 
                  alt="squiggle" 
                  className="h-50 w-auto absolute right-5/6 -top-1/2 rotate-45" 
                  aria-hidden="true" 
                  width={100} 
                  height={100} 
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image 
                  src="/shapes/yellow-squiggle.svg" 
                  alt="squiggle" 
                  className="h-50 w-auto absolute right-1/12 top-3/5 rotate-45" 
                  aria-hidden="true" 
                  width={100} 
                  height={100} 
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image 
                  src="/choc-waffle.jpg" 
                  alt="choc-waffle" 
                  width={3105} 
                  height={2705} 
                  className='w-50 object-contain absolute z-20 right-1/8 -top-1/4' 
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image 
                  src="/fish.jpg" 
                  alt="fish ice-cream" 
                  width={3105} 
                  height={2705} 
                  className='w-40 object-contain absolute z-20 left-1/6 -bottom-2/4' 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default JoinUs