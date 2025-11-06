import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 30V5h16v25M46 30H18a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V34a4 4 0 0 0-4-4ZM14 44h36"
    />
  </svg>
);
export default SvgSuitcaseAlt;
