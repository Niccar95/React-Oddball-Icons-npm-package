import * as React from "react";
const SvgStapleDiagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M46 35h-6v16h6zM34 11h-6v24h6zM22 19h-6v16h6zM12 35h40"
    />
  </svg>
);
export default SvgStapleDiagram;
