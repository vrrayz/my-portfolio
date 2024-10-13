import React from "react";
import { RiGithubFill, RiLinkedinBoxLine } from "react-icons/ri";

export const NavbarInline = () => {
  return (
    <div className={`navbar-inline`}>
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
    </div>
  );
};

interface MobileNavbarProps {
  isNavbarToggled: boolean;
}
export const MobileNavbar = ({ isNavbarToggled }: MobileNavbarProps) => {
  return (
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
  );
};
