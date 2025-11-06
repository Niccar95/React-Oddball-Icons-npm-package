import * as React from "react";
import type { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M48 20H16a2 2 0 0 0-2 2v8.5l3.5 3-1 2.5-1 2.5 2.5 3c0 1.105-1.105 2.5 0 2.5h30a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2Z"
    />
    <path stroke="#000" strokeWidth={2} d="m14 20 18 14 18-14" />
  </svg>
);
export default SvgEnvelope;
