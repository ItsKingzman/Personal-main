import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="text-center mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl font-bold underline">Contact</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
              HIRE ME TODAY
            </h1>
            <a href="mailto:your-email@example.com">
              <Button type="primary">Hire</Button>
            </a>
            <div className="mt-10">
            <Socials className="" socials={[
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
              ]} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-sm font-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.connerking.com">
          <a className="underline underline-offset-1">Conner King</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;