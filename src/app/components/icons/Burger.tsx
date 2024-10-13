import React from "react";

interface Props {
  setIsNavbarToggled: (value: boolean) => void;
  className?: string;
}

export const Burger = ({ setIsNavbarToggled, className }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsNavbarToggled(true)}
      className={`${className}`}
    >
      <rect y="5" width="24" height="2" fill="#D9D9D9" />
      <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
    </svg>
  );
};
