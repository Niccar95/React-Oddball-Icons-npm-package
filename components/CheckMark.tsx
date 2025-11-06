import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <circle
      cx={30.836}
      cy={34.836}
      r={16.5}
      stroke="#000"
      strokeWidth={2}
      transform="rotate(-29.391 30.836 34.836)"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="m30 36.25.937.75 1.031-1.5.516-.75L33 34"
    />
  </svg>
);
export default SvgCheckMark;
