import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Event planning and strategy to meet your business goals",
      keywords: ["NFT Marketplace v2", "project management", "high-quality deliverables"],
    },
    {
      text: "Seamless logistics management, including transportation and venue coordination",
      keywords: ["VivaTech2022", "Next.js", "Ether.js", "Tailwind CSS", "AWS Lambda", "Hardhat"],
    },
    {
      text: "On-site management for smooth execution and guest support",
      keywords: ["blockchain", "smart contracts", "Binance", "investment", "platform development"],
    },
    {
      text: "High-quality AV equipment and technical support for presentations and live events",
      keywords: ["blockchain", "smart contracts", "Binance", "investment", "platform development"],
    },
    {
      text: "Tailored catering options to suit your event’s tone and audience",
      keywords: ["blockchain", "smart contracts", "Binance", "investment", "platform development"],
    },
    {
      text: "Networking and engagement opportunities to foster meaningful connections",
      keywords: ["blockchain", "smart contracts", "Binance", "investment", "platform development"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Corporate Event Planning: <span className="text-[#f5d14e]">Conferences, Seminars</span> & More
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">At Event Factory LLC, we specialize in creating professional, engaging corporate events that align with your business objectives. From conferences and seminars to team-building activities and corporate galas, we handle every detail to ensure your event runs smoothly. Our experienced team works closely with you to customize each event, ensuring it enhances your brand image and leaves a lasting impression on your clients and employees.
          </span>
        
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
