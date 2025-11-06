import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M52 52V30.002h3.948L32 10 7.948 30.002H12V52"
    />
    <path stroke="#000" strokeWidth={2} d="M37 52V40H27v12" />
    <path
      fill="#000"
      d="M27 30.258C27 31.22 25.21 32 23 32s-4-.78-4-1.742 1.79 1.076 4 1.076 4-2.038 4-1.076M45 30.258C45 31.22 43.21 32 41 32s-4-.78-4-1.742 1.79 1.076 4 1.076 4-2.038 4-1.076"
    />
    <path
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={2}
      d="M12 53h15m10 0h15"
    />
    <path
      fill="#000"
      d="m8.111 13.939-3.578-1.758.389-.792 3.233-1.64-1.842-.905.512-1.042 3.384 1.663-.42.856-3.129 1.612 1.963.964zm4.015 1.973-3.578-1.758.389-.792 3.233-1.64-1.842-.905.512-1.042 3.385 1.662-.421.857-3.128 1.611 1.962.965zm4.016 1.973-3.579-1.759.39-.791 3.232-1.64-1.842-.906.512-1.042 3.385 1.663-.421.857-3.128 1.611 1.963.965z"
    />
  </svg>
);
export default SvgHome;
