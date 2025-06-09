import * as React from "react";
const SvgHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M32.064 49.052s-14-10-18-20 4-18 12-14c4 2 6 6 6 6s2-4 6-6c8-4 16 4 12 14s-18 20-18 20Z"
    />
    <path
      fill="#000"
      d="M26.064 30.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M38.064 30.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M28.064 38.052q4-2 8 0"
    />
  </svg>
);
export default SvgHeart;
