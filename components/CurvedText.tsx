import { MotionValue } from "framer-motion"

export const CurvedText = ({ 
  text, 
  radius, 
  fontSize, 
  className, 
  isBottom = false, 
  rotation = 0,
  letterSpacing = 45
}: { 
  text: string, 
  radius: number, 
  fontSize: string, 
  className: string, 
  isBottom?: boolean, 
  rotation?: number | MotionValue<number>,
  letterSpacing?: number
}) => {
    
  const letters = Array.from(text)
  const letterSpacingAngle = letterSpacing / radius
  const totalAngle = letterSpacingAngle * (letters.length - 1) 
  const startAngle = isBottom 
    ? Math.PI * 0.5 - totalAngle / 2  
    : -Math.PI * 0.5 - totalAngle / 2 

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{ 
        transform: `rotate(${-rotation}deg)`,
        transformOrigin: 'center center'
      }}
    >
      {letters.map((letter, i) => {
        const angle = startAngle + (letterSpacingAngle * i)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const letterRotation = (angle * 180) / Math.PI + 90 

        return (
          <span
            key={i}
            className={`absolute ${fontSize} font-yorkgame transition-all duration-300`}
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