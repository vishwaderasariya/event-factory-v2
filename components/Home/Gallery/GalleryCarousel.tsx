import React, { useRef, useEffect } from "react";
import Image1 from "/event-images/img-1.jpg";
import ArrowIcon from "../../Icons/ArrowIcon";
const GalleryCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const containerRefSecondRow = useRef<HTMLDivElement>(null);
  const images = [
    {
      src: "/event-images/salim-suleman-4.jpg",
      alt: "Image 4",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-5.jpg",
      alt: "Image 5",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-6.jpg",
      alt: "Image 6",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-7.jpg",
      alt: "Image 7",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-3.jpg",
      alt: "Image 3",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-9.jpg",
      alt: "Image 9",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/salim-suleman-8.jpg",
      alt: "Image 10",
      name: "Salim Suleman tech Production",
    },
    {
      src: "/event-images/digico-quantum-console.jpg",
      alt: "Image 11",
      name: "Digico Quantum Console",
    },
    {
      src: "/event-images/aaditya-gadhvi-gotilo-tour-2.jpg",
      alt: "Image 12",
      name: "Aaditya Gadhvi Gotilo Tour",
    },

    {
      src: "/event-images/aaditya-gadhvi-gotilo-tour-3.jpg",
      alt: "Image 13",
      name: "Aaditya Gadhvi Gotilo Tour",
    },
    {
      src: "/event-images/aaditya-gadhvi-gotilo-tour.jpg",
      alt: "Image 14",
      name: "Aaditya Gadhvi Gotilo Tour",
    },
    {
      src: "/event-images/backline-setup-2.jpg",
      alt: "Image 15",
      name: "Backline Setup",
    },
    {
      src: "/event-images/backline-setup.jpg",
      alt: "Image 17",
      name: "Backline Setup",
    },
    {
      src: "/event-images/hanging-led-setup.jpg",
      alt: "Image 18",
      name: "Hanging LED setup",
    },
    {
      src: "/event-images/sagar-bhatia-tech-production.jpg",
      alt: "Image 19",
      name: "Sagar Bhatia Tech Production",
    },
    {
      src: "/event-images/10x10-corporate-exhibition-booth.jpeg",
      alt: "Image 21",
      name: "10x10 Corporate Exhibition Booth",
    },
    {
      src: "/event-images/10x10-LED-booth-setup.jpeg",
      alt: "Image 22",
      name: "10x10 LED Booth Setup",
    },
    {
      src: "/event-images/10x20-corporate-booth-setup.jpeg",
      alt: "Image 23",
      name: "10x20 Corporate Booth Setup",
    },
    {
      src: "/event-images/finished-booth-setup.jpeg",
      alt: "Image 24",
      name: "Finished Booth Setup",
    },
    {
      src: "/event-images/booth-making.jpeg",
      alt: "Image 25",
      name: "Booth Making",
    },
    {
      src: "/event-images/booth-setup.jpeg",
      alt: "Image 26",
      name: "Booth Setup",
    },
    {
      src: "/event-images/sukhwinder-singh-tech-production.jpeg",
      alt: "Image 27",
      name: "Sukhwinder Singh Tech Production",
    },
  ];

  const imagesSecondRow = [];
  // Duplicate slides for seamless scrolling
  const duplicatedSlides = [...images, ...images];
  const duplicatedSlides2 = [...imagesSecondRow, ...imagesSecondRow];

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      // const containerSecondRow = containerRefSecondRow.current;

      const keyframes = [
        { transform: "translateX(0)" },
        { transform: `translateX(-${container.scrollWidth / 2}px)` },
      ];
      // const keyframes2 = [
      //   { transform: "translateX(0)" },
      //   { transform: `translateX(-${containerSecondRow.scrollWidth / 2}px)` },
      // ];

      const animation = container.animate(keyframes, {
        duration: 100000, // Adjust duration for scroll speed
        iterations: Infinity,
        easing: "linear",
      });
      // const animationSecondRow = containerSecondRow.animate(keyframes2, {
      //   duration: 95000, // Adjust duration for scroll speed
      //   iterations: Infinity,
      //   easing: "linear",
      // });
      animationRef.current = animation;
      return () => {
        animation.cancel();
        // animationSecondRow.cancel();
      }; // Cleanup on unmount
    }
  }, []);

  const animationRef = useRef<Animation | null>(null); // Store the animation object

  const pauseCarausel = () => {
    if (animationRef.current) {
      animationRef.current.pause(); // Pause the animation
    }
  };

  const resumeCarausel = () => {
    if (animationRef.current) {
      animationRef.current.play(); // Resume the animation
    }
  };

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
              className="relative flex-shrink-0 w-1/3 p-2"
              style={{ minWidth: "100%" }} // Ensure consistent width
              onMouseEnter={pauseCarausel}
              onMouseLeave={resumeCarausel}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[130px] md:h-[400px] rounded-lg object-cover"
              />
              <span className="absolute bottom-16 left-10 text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                {slide.name}
              </span>
            </div>
          ))}
        </div>
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default GalleryCarousel;
