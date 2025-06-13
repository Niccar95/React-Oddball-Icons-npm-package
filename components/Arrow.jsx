import * as React from "react";
const SvgArrow = (props) => (
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
      d="M7 32.23c8-8 18 7.27 27.5-.73 8-8 11.5 2.7 20 .2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m47 25 9 7-9 7"
    />
  </svg>
);
export default SvgArrow;
