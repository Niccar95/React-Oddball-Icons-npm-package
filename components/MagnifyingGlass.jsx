import * as React from "react";
const SvgMagnifyingGlass = (props) => (
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
      d="M28 40c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12ZM38 38l14 14"
    />
    <path
      stroke="#000"
      strokeWidth={2}
      d="m33.324 18.054-5.156 3.21.511 4.643L23 29.054"
    />
  </svg>
);
export default SvgMagnifyingGlass;
