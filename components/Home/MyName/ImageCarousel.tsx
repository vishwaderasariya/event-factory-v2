import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";
import { AnimatePresence } from "framer-motion"

//PUT 3 IMAGES HERE FOR CAROUSEL 
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  const sliderVariants = {
    incoming: (direction : any) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 1.2,
      opacity: 0
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: direction => ({
      x: direction > 0 ? "-100%" : "100%",
      scale: 1,
      opacity: 0.2
    })
  }
  
  const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04]
  }
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52"
    >
        <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-[#f5d14e] font-mono"
      >
            <Img
              src="hero-section-1.jpeg"
              alt="About picture"
              className="opacity-80 absolute right-40 w-2/5 h-1/6 object-cover"
            />
      </motion.span>
      {/* <div className="slider"> */}
          {/* <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>
      <div className="thumbnails">
        {IMAGES.map(image => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img src={image.imageSrc} alt="Musician" />
            <div
              className={`active-indicator ${
                image.id === activeImageIndex ? "active" : null
              }`}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
