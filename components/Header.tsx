import React from "react";
import { globals } from "../globals";

export const Header: React.FC = () => (
  <div className="content">
    <div className="introduction">
      {" "}
      <div className="header">
        <a href="/">{globals.siteName}</a>
        <div className="space" />
        <a href="https://github.com/nanaska">GitHub</a>
      </div>
    </div>
  </div>
);
