import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Expert design and development support through each planning phase.",
      keywords: ["Next.js", "Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js", "API routes"],
    },
    {
      text: "Knowledgeable team familiar with trade show rental best practices.",
      keywords: ["quality assurance", "testing", "user base management"],
    },
    {
      text: "We handle logistical details so you don’t have to.",
      keywords: ["website design", "Figma", "interactivity"],
    },
    {
      text: "Transparent pricing for easy value comparison.",
      keywords: ["smart contracts", "ENS", "team collaboration"],
    },
    {
      text: "Shorten your exhibit planning from months to days.",
      keywords: ["smart contracts", "ENS", "team collaboration"],
    },
    {
      text: "Simple rental process makes logistics easy for your team.",
      keywords: ["smart contracts", "ENS", "team collaboration"],
    },
    {
      text: "On-site managers ensure smooth setup and handle technical needs.",
      keywords: ["smart contracts", "team collaboration"],
    },
    {
      text: "Engaging booths attract quality leads for your sales team.",
      keywords: ["smart contracts", "ENS", "team collaboration"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Corporate <span className="text-[#f5d14e]">Expos</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500"> From concept to completion, we offer comprehensive trade show booth rental services.</span>
          {/* <span
            className="font-mono text-xs text-[#f5d14e] hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.vision.io/", "_blank")}
          >
            www.vision.io
          </span> */}
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
