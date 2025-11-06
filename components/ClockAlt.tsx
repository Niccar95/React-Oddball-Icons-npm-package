import * as React from "react";
import type { SVGProps } from "react";
const SvgClockAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 10h39v39a4 4 0 0 1-4 4H11V14a4 4 0 0 1 4-4Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m32 32 7.846 1.565M32 20v12"
    />
  </svg>
);
export default SvgClockAlt;
