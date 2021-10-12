import React from "react";
import { globals } from "../globals";

export const Header: React.FC = () => (
  <div className="content">
    <div className="introduction">
      {" "}
      <div className="header">
        <a href="/">{globals.siteName}</a>
        <div className="space" />
        <a href="https://github.com/nanaska123">GitHub</a>
        <div className="space" />
        <a href="/blog/the-ultimate-tech-stack">Motivation</a>
      </div>{" "}
    </div>
  </div>
);
