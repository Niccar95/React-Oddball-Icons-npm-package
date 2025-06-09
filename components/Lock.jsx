import * as React from "react";
const SvgLock = (props) => (
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
      d="M42 28H22a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM24 28v-8a8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgLock;
