import { motion, MotionValue, useTransform } from "framer-motion";
import { CurvedText } from "./CurvedText";
import { useEffect, useState } from "react";

  export const TextArc = ({ data, index, scrollOffset }: { data: { top: string, bottom: string }[], index: number, scrollOffset: MotionValue<number> }) => {
   
    const [windowWidth, setWindowWidth] = useState(1200)

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const topRotation = useTransform(scrollOffset, [0, 1], [0, 360 + (index * 90)])
  const bottomRotation = useTransform(scrollOffset, [0, 1], [0, -360 - (index * 90)])

  const rotate = useTransform(scrollOffset, [0, 1], [0, -360 + (index * 90)])

  
    return (
      <motion.div style={{rotate }} className="absolute top-2/3 w-screen origin-center h-full">
        <CurvedText 
          text={data[0].top.toUpperCase()}
          radius={windowWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={false}
          rotation={topRotation}
        />
          <CurvedText 
          text={data[0].bottom.toUpperCase()}
          radius={windowWidth  * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-4"
          isBottom={false}
          rotation={topRotation}
        />

<CurvedText 
          text={data[1].top.toUpperCase()}
          radius={window.innerWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={true}
          rotation={bottomRotation}
        />
          <CurvedText 
          text={data[1].bottom.toUpperCase()}
          radius={window.innerWidth * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-4"
          isBottom={true}
          rotation={bottomRotation}
        />
      
      </motion.div>
    );
  };