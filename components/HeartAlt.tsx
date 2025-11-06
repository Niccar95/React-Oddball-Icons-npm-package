import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.984 49.855s5-7 1-17c-3.8-9.5-9-20.5 0-16.803 4 2 6 6 6 6s2-4 6-6c8-4 16 4 12 14s-25 19.803-25 19.803Z"
    />
  </svg>
);
export default SvgHeartAlt;
