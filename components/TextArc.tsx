export const CurvedText = ({ text, radius, fontSize, className, isBottom = false, rotation = 0 }: { text: string, radius: number, fontSize: string, className: string, isBottom?: boolean, rotation?: number }) => {
    const letters = Array.from(text)
    const totalAngle = Math.PI * 0.3
    const angleStep = totalAngle / (letters.length - 5)
    const startAngle = isBottom ? Math.PI * 0.5 : - Math.PI * 0.5 

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
              className={`absolute ${fontSize} font-bold font-poetsen transition-all duration-300`}
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
  export const TextArc = ({ data, index, scrollOffset }: { data: { top: string, bottom: string }, index: number, scrollOffset: number }) => {
    const baseRotation = scrollOffset > 1000 ? (scrollOffset * 0.09) + (index * 90) : 0;
    const topRotation = baseRotation;
    const bottomRotation = baseRotation;
  
    return (
      <div className="absolute top-2/3 w-screen origin-center h-full">
        <CurvedText 
          text={data.top.toUpperCase()}
          radius={window.innerWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={false}
          rotation={topRotation}
        />
          <CurvedText 
          text={data.bottom.toUpperCase()}
          radius={window.innerWidth  * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-8"
          isBottom={false}
          rotation={topRotation}
        />

<CurvedText 
          text={data.top.toUpperCase()}
          radius={window.innerWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={true}
          rotation={bottomRotation}
        />
          <CurvedText 
          text={data.bottom.toUpperCase()}
          radius={window.innerWidth * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-8"
          isBottom={true}
          rotation={bottomRotation}
        />
      
      </div>
    );
  };  