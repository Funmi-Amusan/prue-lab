
  
  export const Post = ({ children,}: { children: React.ReactNode; }) => {
    return (
      <div className={`post fun-hover splatter`}>
         <a 
        className={` bg-amber-400 rounded-full p-2 leading-19`}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </a>
      </div>
    );
  };