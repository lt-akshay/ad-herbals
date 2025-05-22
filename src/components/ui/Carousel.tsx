import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  slides, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, interval]);

  return (
    <div className="relative overflow-hidden h-[70vh] bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg text-white/90 mb-6">{slide.description}</p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors duration-200"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors duration-200"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors duration-200"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;