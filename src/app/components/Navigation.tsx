"use client";
import React, { useState } from "react";
import {
  RiCodeSSlashFill,
  RiGithubFill,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import { Burger } from "./icons/Burger";
import { Close } from "./icons/Close";

export const Navigation = () => {
  const [isNavbarToggled, setIsNavbarToggled] = useState<boolean>(false);
  return (
    <>
      <nav className="navigation">
        <a href="#" className="logo">
          <RiCodeSSlashFill size={21} />
          <span>TheGrimSavage</span>
        </a>
        {isNavbarToggled ? (
          <Close setIsNavbarToggled={setIsNavbarToggled} />
        ) : (
          <Burger setIsNavbarToggled={setIsNavbarToggled} />
        )}
      </nav>
      <div className={`navbar ${!isNavbarToggled && "swipe-up"}`}>
        <div className="links">
          <a href="#">
            <span>#</span>home
          </a>
          <a href="#">
            <span>#</span>projects
          </a>
          <a href="#">
            <span>#</span>about-me
          </a>
          <a href="#">
            <span>#</span>contacts
          </a>
        </div>
        <div className="socials">
          <a href="#">
            <RiGithubFill size={64} />
          </a>
          <a href="#">
            <RiLinkedinBoxLine size={64} />
          </a>
        </div>
      </div>
    </>
  );
};
