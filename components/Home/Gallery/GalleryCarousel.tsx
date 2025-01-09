import React, { useRef, useEffect } from "react";
import Image1 from "/event-images/img-1.jpg";
import ArrowIcon from "../../Icons/ArrowIcon";
const GalleryCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRefSecondRow = useRef<HTMLDivElement>(null);
  const images = [
    {
      src: "/event-images/img-1.jpg",
      alt: "Image 1",
    },

    {
      src: "/event-images/img-4.jpg",
      alt: "Image 4",
    },
    {
      src: "/event-images/img-5.jpg",
      alt: "Image 5",
    },
    {
      src: "/event-images/img-2.jpg",
      alt: "Image 2",
    },
    {
      src: "/event-images/img-6.jpg",
      alt: "Image 6",
    },
    {
      src: "/event-images/img-7.jpg",
      alt: "Image 7",
    },
    {
      src: "/event-images/img-3.jpg",
      alt: "Image 3",
    },
    {
      src: "/event-images/img-9.jpg",
      alt: "Image 9",
    },
    {
      src: "/event-images/img-10.jpg",
      alt: "Image 10",
    },
    {
      src: "/event-images/img-11.jpg",
      alt: "Image 11",
    },
  ];

  const imagesSecondRow = [
    {
      src: "/event-images/img-12.jpg",
      alt: "Image 12",
    },

    {
      src: "/event-images/img-13.jpg",
      alt: "Image 13",
    },
    {
      src: "/event-images/img-14.jpg",
      alt: "Image 14",
    },
    {
      src: "/event-images/img-15.jpg",
      alt: "Image 15",
    },
    {
      src: "/event-images/img-16.jpg",
      alt: "Image 16",
    },
    {
      src: "/event-images/img-17.jpg",
      alt: "Image 17",
    },
    {
      src: "/event-images/img-18.jpg",
      alt: "Image 18",
    },
    {
      src: "/event-images/img-19.jpg",
      alt: "Image 19",
    },
    {
      src: "/event-images/img-20.jpg",
      alt: "Image 20",
    },
  ];
  // Duplicate slides for seamless scrolling
  const duplicatedSlides = [...images, ...images];
  const duplicatedSlides2 = [...imagesSecondRow, ...imagesSecondRow];

  useEffect(() => {
    if (containerRef.current && containerRefSecondRow.current) {
      const container = containerRef.current;
      const containerSecondRow = containerRefSecondRow.current;

      const keyframes = [
        { transform: "translateX(0)" },
        { transform: `translateX(-${container.scrollWidth / 2}px)` },
      ];
      const keyframes2 = [
        { transform: "translateX(0)" },
        { transform: `translateX(-${containerSecondRow.scrollWidth / 2}px)` },
      ];

      const animation = container.animate(keyframes, {
        duration: 50000, // Adjust duration for scroll speed
        iterations: Infinity,
        easing: "linear",
      });
      const animationSecondRow = containerSecondRow.animate(keyframes2, {
        duration: 45000, // Adjust duration for scroll speed
        iterations: Infinity,
        easing: "linear",
      });

      return () => {
        animation.cancel();
        animationSecondRow.cancel();
      }; // Cleanup on unmount
    }
  }, []);

  return (
    <div
      id="gallerySection"
      className="px-0 2xl:px-72  xl:px-56 lg:px-32 sm:px-8"
    >
      <section className="flex flex-row items-center mb-[32px] w-full mx-auto max-w-6xl justify-center md:justify-start max-lg:max-w-3xl">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-[#f5d14e]"}
          />
          <span className="text-[#f5d14e] font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Our Gallery
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <div
        data-aos="fade-up"
        className="relative w-full max-w-6xl mx-auto overflow-hidden mb-20 md:mb-32  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex md:gap-4"
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
                className="w-full h-[130px] md:h-[340px] rounded-lg "
              />
            </div>
          ))}
        </div>
        <div
          ref={containerRefSecondRow}
          className="flex md:gap-4"
          style={{ whiteSpace: "nowrap" }}
        >
          {duplicatedSlides2.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 p-2"
              style={{ minWidth: "calc(33.33% - 16px)" }} // Ensure consistent width
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[130px] md:h-[340px] rounded-lg "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
