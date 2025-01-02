import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Customized event planning to bring your vision to life.",
      keywords: ["vision", "ERC20", "AWS Lambda", "project lifecycle", "timely delivery"],
    },
    {
      text: "Creative décor tailored to birthdays, anniversaries, and milestones.",
      keywords: ["peer-to-peer", "frontend", "smart contracts", "blockchain integration", "security"],
    },
    {
      text: "Experienced team ensuring seamless coordination from start to finish.",
      keywords: ["Solidity", "smart contracts", "MongoDB", "blockchain protocols", "data management"],
    },
    {
      text: "Unique themes and designs that leave lasting memories.",
      keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    },
    {
      text: "High-quality lighting, sound, and visual effects for an unforgettable ambiance.",
      keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    },
    {
      text: "Personalized touches, from table settings to floral arrangements.",
      keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    },
    {
      text: "Fun and engaging setups that make every celebration extraordinary.",
      keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Social Event Planning: 
          <span className="text-[#f5d14e]"> Birthdays, Anniversaries & More</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Celebrate life’s milestones with seamless and memorable social events.
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-[#f5d14e] flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
