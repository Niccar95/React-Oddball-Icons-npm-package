import * as React from "react";
const SvgSpeechBubble = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 12h44v28H20L10 50V12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 34 3-6 3 6 3-6 3 6 3-6"
    />
  </svg>
);
export default SvgSpeechBubble;
