import React from "react";
import Link from "next/link";
import { globals } from "../globals";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

import Vk from "../public/img/vk.png";

import Mail from "../public/img/arroba.png";
export const Header: React.FC = () => {
  const [uznatWidth, setUznatWidth] = useState(true);
  const [width, setWidth] = useState(0);
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  React.useEffect(() => {
    changeTh();
  }, [theme]);
  function changeTh() {
    if (theme == "light") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }
  React.useEffect(() => {
    var width = screen.availWidth;

    if (width <= 354) {
      setUznatWidth(true);
    } else {
      setUznatWidth(false);
    }
  }, []);

  return (
    <div className="content ">
      <div className="introduction ">
        {" "}
        <div className="header ">
          <Link href="/">
            <a>{globals.siteName}</a>
          </Link>
          <div className="space" />
          {uznatWidth && (
            <div className="gitproj ">
              <a href="https://github.com/nanaska">GitHub</a>
              <div className="space" />
              <a href="#id">Projects</a>
            </div>
          )}
          {!uznatWidth && (
            <>
              <a href="https://github.com/nanaska">GitHub</a>
              <div className="space" />
              <a href="#id">Projects</a>
            </>
          )}
          <div className="space" />
          <div className="changeTheme">
            <button
              className={toggle ? "fork-buttonlight active" : "fork-buttondark"}
              onClick={() => setTheme("light")}
            >
              Light
            </button>

            <button
              className={toggle ? "fork-buttonlight" : "fork-buttondark active"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>

          <div className="floatright"></div>
          <a href="https://vk.com/dshakhov0">
            <Image src={Vk} width={40} height={40} alt="Ссылка на vk" />
          </a>
          <div className="spaceq"></div>
          <Link href="/contact">
            <a>
              <Image src={Mail} width={40} height={40} alt="Ссылка на mail" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
