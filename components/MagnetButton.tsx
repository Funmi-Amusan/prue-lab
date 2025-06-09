import { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { TbArrowBigLeftLinesFilled } from 'react-icons/tb';

export default function Magnet({type,
    title,
    handleClick,}: {  type: string;
        title: string;
        handleClick: () => void;}) {
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
        <motion.button
        onClick={handleClick}
        title={title}
        className='rounded-full h-fit p-4 cursor-pointer relative'
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 50, damping: 15, mass: 0.1 }}
    >
        <motion.div
            className="bg-white aspect-square rounded-full absolute inset-0"
            animate={isHovered ? 
                { scale: 1, opacity: 1 } : 
                { scale: 0.1, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{zIndex: 1}} 
        />
        
         <TbArrowBigLeftLinesFilled className={`relative text-black z-30 ${type === 'next' ? 'rotate-180' : ''}`} size={30} /> 
    </motion.button>
    )
}