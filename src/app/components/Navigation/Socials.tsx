import React from "react";
import { RiGithubFill, RiLinkedinBoxLine } from "react-icons/ri";
import { Line } from "../icons/Line";

export const Socials = () => {
  return (
    <div className="styled-socials">
      <Line />
      <a href="#">
        <RiGithubFill size={32} />
      </a>
      <a href="#">
        <RiLinkedinBoxLine size={32} />
      </a>
    </div>
  );
};
