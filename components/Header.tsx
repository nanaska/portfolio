import React from "react";
import Link from "next/link";
import { globals } from "../globals";
import { useTheme } from "next-themes";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
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
          <a href="#post-card-container">Projects</a> <hr />
          <div>now used {theme} theme</div>
          <div className="changeTheme">
            <button onClick={() => setTheme("light")}>Light Mode</button>
            <button onClick={() => setTheme("dark")}>Dark Mode</button>
          </div>
        </div>
      </div>
    </div>
  );
};
