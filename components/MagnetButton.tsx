import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnet({children}: {children: React.ReactNode}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouse = (e: { clientX: number; clientY: number; }) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const element = ref.current as HTMLDivElement;
        const { height, width, left, top } = element.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            style={{ position: "relative" }}
            className='rounded-full p-6'
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 50, damping: 15, mass: 0.1 }}
        >
            {/* Hover Effect Animation */}
            <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scale: 0.1, opacity: 0, x: -50 }}
                whileHover={{ scale: 1, opacity: 1, x: 0 }}
                style={{zIndex: 0}}
            />
            {children}
        </motion.div>
    )
}