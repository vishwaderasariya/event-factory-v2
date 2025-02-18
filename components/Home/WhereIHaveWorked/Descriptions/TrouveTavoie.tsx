import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Led front-end and back-end development to implement a new user workflow system for an NFT marketplace, enhancing the purchasing experience and contributing to a successful marketplace launch.",
      keywords: ["NFT Marketplace", "user workflow", "purchasing experience"],
    },
    {
      text: "Worked extensively with JavaScript, TypeScript, Next.js, React, AWS, and Vercel to optimize system performance, achieving a 30% improvement in transaction speed and increased user engagement.",
      keywords: ["JavaScript", "TypeScript", "Next.js", "React", "AWS", "Vercel", "system performance"],
    },
    {
      text: "Collaborated closely with developers, providing technical expertise and insights to enhance the overall system architecture.",
      keywords: ["team collaboration", "technical expertise", "system architecture"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Concert Event Production: <span className="text-[#f5d14e]"> Sound, Light, Staging</span> & More
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Complete concert production services to create unforgettable live experiences.</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
              <div className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-[#f5d14e] flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  // dangerouslySetInnerHTML={{
                  //   __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  // }}
                >From sound and lighting to staging and technical support, we provide full-service concert production tailored to every need. Our team handles everything—transportation, artist and team accommodations, venue management, security, logistics, and catering—ensuring a smooth and seamless event. With our expert coordination and attention to detail, we ensure that every aspect of your concert runs flawlessly, from the first note to the final encore. Let us make your next concert a spectacular success, with top-tier production and dedicated support every step of the way.</span>
              </div>
         
        </div>
      </div>
    </>
  );
}
