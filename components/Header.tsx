import React from "react";
import Link from "next/link";
import { globals } from "../globals";

export const Header: React.FC = () => (
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
        <Link href="#post-card-container">
          <a>Projects</a>
        </Link>
      </div>
    </div>
  </div>
);
