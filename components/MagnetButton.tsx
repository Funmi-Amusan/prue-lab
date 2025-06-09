import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnet({children}: {children: React.ReactNode}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0, y:0});
    const [isHovered, setIsHovered] = useState(false);

    const handleMouse = (e: { clientX: number; clientY: number; }) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const element = ref.current as HTMLDivElement;
        const { height, width, left, top } = element.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };    
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const reset = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
        className='rounded-full p-4 cursor-pointer relative'
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 50, damping: 15, mass: 0.1 }}
    >
        <motion.div
            className="bg-white rounded-full absolute inset-0"
            animate={isHovered ? 
                { scale: 1, opacity: 1 } : 
                { scale: 0.1, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{zIndex: 1}} 
        />
        
        <div className="relative z-10">
            {children}
        </div>
    </motion.div>
    )
}