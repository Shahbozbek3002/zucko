import React from "react";

interface Props {
  stroke?: string;
}

export const IconArrowUpRight = ({ stroke = "#E84511" }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 21.25L20.625 9.375"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M8.75 8.75H21.25V21.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
