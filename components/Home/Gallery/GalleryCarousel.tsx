import React, { useRef, useEffect } from "react";

const GalleryCarousel = () => {
  const image = "https://iskcondwarka.org/donate-book/img/about.jpg"; // Image URL
  const slides = Array(6).fill({ src: image, alt: "Image" }); // Repeat the same image
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate slides for seamless scrolling
  const duplicatedSlides = [...slides, ...slides];

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const keyframes = [
        { transform: "translateX(0)" },
        { transform: `translateX(-${container.scrollWidth / 2}px)` },
      ];

      const animation = container.animate(keyframes, {
        duration: 30000, // Adjust duration for scroll speed
        iterations: Infinity,
        easing: "linear",
      });

      return () => animation.cancel(); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Shadow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-gray-800 via-transparent to-transparent shadow-xl" />
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-gray-800 via-transparent to-transparent shadow-xl" />
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 p-2"
            style={{ minWidth: "calc(33.33% - 16px)" }} // Ensure consistent width
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
