import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckMarkAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 38.75 28.37 45l4.815-12.5 2.408-6.25L38 20"
    />
    <path
      stroke="#000"
      strokeWidth={2}
      d="M23.863 25.692c8.13-4.58 17.329-2.855 20.756 3.229s.135 14.844-7.996 19.424-17.33 2.855-20.757-3.229-.135-14.844 7.997-19.424Z"
    />
  </svg>
);
export default SvgCheckMarkAlt;
