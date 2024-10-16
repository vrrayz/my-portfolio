import React from "react";

interface Props {
  className?: string;
}

export const Line = () => {
  return (
    <svg
      width="2"
      height="191"
      viewBox="0 0 2 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.499995 191L0.500004 0L1.5 4.37114e-08L1.5 191L0.499995 191Z"
        fill="#ABB2BF"
      />
    </svg>
  );
};

export const HorizontalLine = ({ className }: Props) => {
  return (
    <svg
      width="511"
      height="2"
      viewBox="0 0 511 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M511 1.5H0V0.5H511V1.5Z"
        fill="#C778DD"
      />
    </svg>
  );
};
