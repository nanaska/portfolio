import React from "react";
import Link from "next/link";
import { globals } from "../globals";
import { useTheme } from "next-themes";
import { useState } from "react";
export const Header: React.FC = () => {
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
  return (
    <div className="content ">
      <div className="introduction ">
        {" "}
        <div className="header ">
          <Link href="/">
            <a>{globals.siteName}</a>
          </Link>
          <div className="space" />
          <a href="https://github.com/nanaska">GitHub</a>
          <div className="space" />
          <a href="#post-card-container">Projects</a>
          <div className="space" />
          <div className="changeTheme">
            <button
              className={toggle ? "fork-buttonlight active" : "fork-buttondark"}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <div className="space" />
            <button
              className={toggle ? "fork-buttonlight" : "fork-buttondark active"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
