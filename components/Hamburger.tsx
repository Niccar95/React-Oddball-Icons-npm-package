import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.04 23.196 16.961-1.162 17.958-1.23M15.046 30.331l34.84 3.338"
    />
    <path fill="#000" d="M15 41a1 1 0 1 0 0 2h35.001a1 1 0 0 0 0-2H15" />
  </svg>
);
export default SvgHamburger;
