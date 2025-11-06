import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M52 52V30.002h3.948L32 10l-4 8.5h-2.5l-1.5 2-1 1.5-3.026-2L7.948 30.003H12V52"
    />
    <path stroke="#000" strokeWidth={2} d="M37 52V40H27v12" />
    <path
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={2}
      d="M12 53h15m10 0h15"
    />
  </svg>
);
export default SvgHomeAlt;
