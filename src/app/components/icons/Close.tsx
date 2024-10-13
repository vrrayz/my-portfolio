import React, { useEffect, useState } from "react";

interface Props {
  setIsNavbarToggled: (value: boolean) => void;
  className?: string;
}
export const Close = ({ setIsNavbarToggled, className }: Props) => {
  const [shouldRotate, setShouldRotate] = useState<boolean>(true);

  const closeNav = () => {
    setShouldRotate(true);
    setTimeout(() => setIsNavbarToggled(false), 100);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRotate(false), 100);

    return () => {
      clearInterval(timeout);
    };
  }, []);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => closeNav()}
      className={`close-icon ${shouldRotate && "rotate"} ${className}`}
    >
      <rect
        width="1"
        height="1"
        transform="matrix(1 0 0 -1 11 12)"
        fill="#D9D9D9"
      />
      <rect
        x="3"
        y="19.9706"
        width="24"
        height="2"
        transform="rotate(-45 3 19.9706)"
        fill="#D9D9D9"
      />
      <rect
        x="4"
        y="3"
        width="24"
        height="2"
        transform="rotate(45 4 3)"
        fill="#D9D9D9"
      />
    </svg>
  );
};
