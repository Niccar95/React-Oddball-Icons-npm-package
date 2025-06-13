import * as React from "react";
const SvgClockAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M15 10h39v39a4 4 0 0 1-4 4H11V14a4 4 0 0 1 4-4Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m32 32 7.846 1.565M32 20v12"
    />
  </svg>
);
export default SvgClockAlt;
