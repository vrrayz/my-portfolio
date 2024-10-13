"use client";
import React, { useState } from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { Burger } from "../icons/Burger";
import { Close } from "../icons/Close";
import { MobileNavbar, NavbarInline } from "./Navbar";
import { Socials } from "./Socials";

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
          <Close
            setIsNavbarToggled={setIsNavbarToggled}
            className="menu-icon"
          />
        ) : (
          <Burger
            setIsNavbarToggled={setIsNavbarToggled}
            className="menu-icon"
          />
        )}
        <NavbarInline />
      </nav>
      <MobileNavbar isNavbarToggled={isNavbarToggled} />
      <Socials />
    </>
  );
};
