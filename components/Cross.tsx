import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 23.958c10.333 7.185 19.955 9.457 23.245 15.626"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M39.508 20c-7.12 10.343-9.302 19.926-15.476 23.262"
    />
  </svg>
);
export default SvgCross;
