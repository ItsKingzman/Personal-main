import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const socials = [
  {
    id: "1",
    title: "Github",
    link: "https://github.com/ItsKingzman",
    iconName: "github.png"
  },
  {
    id: "2",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/conner-king-3b8949114/",
    iconName: "linkedin.png"
  },
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
  },
  {
    id: "5",
    title: "KingzmanCo",
    link: "https://kingzmanco.com/",
    iconName: "images/kngz-logo.png"
  }
];

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {socials.map((social) => (
        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
          <img src={`/images/${social.iconName}`} alt={social.title} style={{ width: '45px', height: '45px' }} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
