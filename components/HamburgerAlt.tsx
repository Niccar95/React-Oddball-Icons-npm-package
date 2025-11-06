import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburgerAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 22s7 1.5 17 0 18 0 18 0M15 32s12.5 3.5 35 0M15 42c21.373-1.28 27.796-1.075 35 0"
    />
  </svg>
);
export default SvgHamburgerAlt;
