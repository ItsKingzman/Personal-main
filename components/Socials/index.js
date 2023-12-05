import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const socials = [
  {
    id: "3",
    title: "TikTok",
    link: "https://www.tiktok.com/@kingzmanco?lang=en",
    iconName: "tiktok.png"
  },
  {
    id: "4",
    title: "Instagram",
    link: "https://www.instagram.com/kingzmanco/",
    iconName: "Instagram_icon.png"
  }
];

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {socials.map((social) => (
        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
          <img src={`/images/${social.iconName}`} alt={social.title} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
