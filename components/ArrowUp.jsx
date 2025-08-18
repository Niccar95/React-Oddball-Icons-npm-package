import * as React from "react";
const SvgArrowUp = (props) => (
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
      d="M32.23 57c-8-8 7.27-18-.73-27.5-8-8 2.7-11.5.2-20"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m25 17 7-9 7 9"
    />
  </svg>
);
export default SvgArrowUp;
