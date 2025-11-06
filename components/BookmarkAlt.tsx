import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 21a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v36l-15-6.222L17 57z"
    />
    <ellipse
      cx={32.5}
      cy={9.5}
      stroke="#000"
      strokeWidth={2}
      rx={14.5}
      ry={2.5}
    />
  </svg>
);
export default SvgBookmarkAlt;
