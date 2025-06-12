"use client";
import Image from "next/image";
import { useState, useRef, useId } from "react";
import Magnet from "./MagnetButton";
import GridBackgroundLink from "./GridBackgroundLink";
import Link from "next/link";

interface SlideData {
  name: string;
  src: string;
  description: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Slide = ({ slide, index, current, totalSlides, onPrevious, onNext }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, name, description } = slide;

  const getRelativePosition = () => {
    const diff = index - current;
    if (diff === 0) return 0; 
    if (diff === 1 || diff === -(totalSlides - 1)) return 1;
    if (diff === -1 || diff === totalSlides - 1) return -1;
    return diff; 
  };

  const position = getRelativePosition();

  const getTransform = () => {
    switch (position) {
      case -1:
        return "translateX(-120%) scale(0.6) rotateX(8deg)";
      case 0: 
        return "translateX(0%) scale(0.85) rotateX(0deg)";
      case 1: 
        return "translateX(120%) scale(0.6) rotateX(8deg)";
      default: 
        return `translateX(${position > 0 ? 200 : -200}%) scale(0) rotateX(15deg)`;
    }
  };

  const getOpacity = () => {
    if (Math.abs(position) <= 1) return position === 0 ? 1 : 0.7;
    return 0;
  };

  const getZIndex = () => {
    if (position === 0) return 20;
    if (Math.abs(position) === 1) return 10;
    return 5;
  };

  const shouldShow = () => {
    return position === 0; 
  };

  return (
    <li
    ref={slideRef}
    className={`
      absolute flex items-center justify-center text-center text-white transition-all duration-500 ease-in-out 
      w-[33vw] aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      md:block
      ${shouldShow() ? 'block' : 'hidden md:block'}
    `}
    style={{
      transform: getTransform(),
      opacity: getOpacity(),
      zIndex: getZIndex(),
      pointerEvents: Math.abs(position) <= 1 ? 'auto' : 'none',
    }}
  >
    {position === 0 && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-30 md:-translate-x-full ">
        <Magnet
          type="prev"
          title="Go to prev slide"
          handleClick={onPrevious}
        />
      </div>
    )}
    
    <div
      className="relative w-full h-full p-12 rounded-full transition-all duration-500 ease-out"
      style={{
        backgroundColor: position === 0 ? 'white' : '',
      }}
    >
      <Image
        className="relative z-10 size-full object-contain transition-opacity duration-600 ease-in-out"
        alt={name}
        src={src}
        width={200}
        height={200}
        onLoad={imageLoaded}
        loading="eager"
        decoding="sync"
      />
      {position === 0 && (
        <h2 
          style={{
            WebkitTextStroke: '10px #ffee1e',
            paintOrder: 'stroke fill',
          }} 
          className='text-primary uppercase text-xl tracking-wider font-sans font-black -rotate-12 absolute top-10 -left-8'
        >
          {name}
        </h2>
      )}
    </div>

    {position === 0 && (
      <div className="absolute top-full left-1/2 w-full -translate-x-1/2 mt-8 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className='text-primary uppercase text-base font-semibold tracking-wider font-sans '>
          {description}
        </p>
        <GridBackgroundLink>
          <Link href="/products" className='link'>Products</Link>
        </GridBackgroundLink>
      </div>
    )}

    {position === 0 && (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-30 md:translate-x-full translate-x-8">
        <Magnet 
          type="next"
          title="Go to next slide"
          handleClick={onNext}
        />
      </div>
    )}
  </li>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const id = useId();

  return (
    <div
      className="relative w-[90vw] h-[90vw] md:w-[70vmin] md:h-[70vmin] mx-auto [perspective:1200px] [transform-style:preserve-3d] max-w-md md:max-w-none"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="relative w-full h-full">
        {slides.map((slide, index) => (
          <Slide
            key={index} 
            slide={slide}
            index={index}
            current={current}
            totalSlides={slides.length}
            onPrevious={handlePreviousClick}
            onNext={handleNextClick}
          />
        ))}
      </ul>
    </div>
  );
}