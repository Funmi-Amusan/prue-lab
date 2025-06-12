import { motion, MotionValue, useTransform } from "framer-motion";
import { CurvedText } from "./CurvedText";
import { useEffect, useState } from "react";

  export const TextArc = ({ data, index, scrollOffset }: { data: { top: string, bottom: string }[], index: number, scrollOffset: MotionValue<number> }) => {
   
    const [windowWidth, setWindowWidth] = useState(1200)
    const [spacing, setSpacing] = useState(15)

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setSpacing(width >= 768 ? 45 : 15)
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const topRotation = useTransform(scrollOffset, [0, 1], [0, 360 + (index * 90)])
  const bottomRotation = useTransform(scrollOffset, [0, 1], [0, -360 - (index * 90)])

  const rotate = useTransform(scrollOffset, [0, 1], [0, -360 + (index * 90)])

  
    return (
      <motion.div style={{rotate }} className="absolute top-1/2  w-full origin-center aspect-square">
        <CurvedText 
          text={data[0].top.toUpperCase()}
          radius={windowWidth * 0.55 } 
          isBottom={false}
          rotation={topRotation}
     letterSpacing={spacing}
        />
          <CurvedText 
          text={data[0].bottom.toUpperCase()}
          radius={windowWidth  * 0.5} 
          className="top-2"
          isBottom={false}
          rotation={topRotation}
      letterSpacing={spacing}
        />

<CurvedText 
          text={data[1].top.toUpperCase()}
          radius={window.innerWidth * 0.55 } 
          isBottom={true}
          rotation={bottomRotation}
      letterSpacing={spacing}
        />
          <CurvedText 
          text={data[1].bottom.toUpperCase()}
          radius={window.innerWidth * 0.5} 
          className="-top-2"
          isBottom={true}
          rotation={bottomRotation}
      letterSpacing={spacing}
        />
      
      </motion.div>
    );
  };