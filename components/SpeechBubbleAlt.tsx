import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeechBubbleAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path stroke="#000" strokeWidth={2} d="M10 16h44v28H26L16 54V44h-6z" />
    <path
      stroke="#000"
      strokeDasharray="2 2"
      strokeWidth={2}
      d="M20 26h4m4 0h4m4 0h4"
    />
    <path
      stroke="#000"
      strokeDasharray="1 3"
      strokeWidth={2}
      d="M20 34h8m8 0h4"
    />
  </svg>
);
export default SvgSpeechBubbleAlt;
