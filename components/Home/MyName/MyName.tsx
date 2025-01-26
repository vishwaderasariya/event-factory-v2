import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";
import { Link as ReactScrollLink } from "react-scroll";

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-36 sm:py-52"
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-[#f5d14e] font-mono"
      >
        Welcome to event factory LLC,
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Full In-House
      </motion.h1>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Media Production
      </motion.h1>
      {/* <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
      Creating Unforgettable Experiences
      </motion.h2> */}

      {/* <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 6.2, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 6.2, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-[#f5d14e]">software engineer</span>, with strong problem-solving skills. I
        specialize in building great digital experiences, <br className="2xl:block hidden" />
        both in <span className="text-[#f5d14e]">front-end</span> and{" "}
        <span className="text-[#f5d14e]">back-end</span> development. I work with different technologies, including
        <span className="text-[#f5d14e]"> web3</span> and regular <br className="2xl:block hidden" /> web
        applications. I enjoy working on projects that bring new ideas and high-quality results.
      </motion.h3> */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider "
      >
        Creating Unforgettable Experiences
        {/* I&apos;m a <span className="text-[#f5d14e]">Full Stack Software Engineer</span> with strong{" "}
        <span className="text-[#f5d14e]">problem-solving skills</span>, specializing in creating exceptional digital
        experiences.
        <br className="3xl:block hidden" /> With expertise in both <span className="text-[#f5d14e]">front-end</span>{" "}
        and <span className="text-[#f5d14e]">back-end development</span>
        , I work with a diverse range of technologies, including{" "}
        <span className="text-[#f5d14e]"> web3</span>
        <br className="3xl:block hidden" /> and traditional web applications. I enjoy solving challenging projects that
        drive <span className="text-[#f5d14e]"> innovation</span> and deliver high-quality results.
        <br className="3xl:block hidden" /> My experience in{" "}
        <span className="text-[#f5d14e]">leading development teams</span> has honed my ability to collaborate
        effectively and translate ideas into functional solutions.
        <br className="3xl:block hidden" /> I am excited to contribute to dynamic projects that push the boundaries of
        technology. */}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6.3,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6.3,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <ReactScrollLink
          to="WhereIhaveWorkedSection"
          spy={true}
          smooth={true}
          offset={-300}
          duration={200}
        >
          <button className="bg-AAprimary text-[#f5d14e] border rounded px-4 sm:px-8 py-3 sm:py-4 border-[#f5d14e]">
            Checkout our services
          </button>
        </ReactScrollLink>
      </motion.div>
    </div>
  );
}
