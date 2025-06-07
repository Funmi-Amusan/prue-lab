import { MotionValue } from "framer-motion"

export const CurvedText = ({ text, radius, fontSize, className, isBottom = false, rotation = 0 }: { text: string, radius: number, fontSize: string, className: string, isBottom?: boolean, rotation?: number | MotionValue<number>  }) => {
    const letters = Array.from(text)
    const totalAngle = Math.PI * 0.3
    const angleStep = totalAngle / (letters.length - 5)
    const startAngle = isBottom ? Math.PI * 0.3 : - Math.PI * 0.7 

    return (
      <div 
        className={`absolute inset-0  ${className}`}
        style={{ 
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: 'center center'
        }}
      >
        {letters.map((letter, i) => {
          const angle = startAngle + (angleStep * i)
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const letterRotation = (angle * 180) / Math.PI + 90

          return (
            <span
              key={i}
              className={`absolute ${fontSize} font-bold font-yorkgame transition-all duration-300`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${letterRotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          )
        })}
      </div>
    )
  }   