import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-[#f5d14e] fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  {
    href: "https://www.instagram.com/eventfactoryllc/?igsh=cWs0eHdjdHp0aGNo&utm_source=qr",
    Icon: InstagramIcon,
  },
];

export default function Fotter(props: {
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => {
          return (
            <ClickableIcon
              key={index}
              href={iconData.href}
              Icon={iconData.Icon}
            />
          );
        })}
      </div>
      <a
        href="https://www.markitservices.com/"
        className=""
        target={"_blank"}
        rel="noreferrer"
      >
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-[#f5d14e] sm:text-sm text-xs">
            Designed by Mark.it
          </span>
        </div>
      </a>
    </div>
  );
}
