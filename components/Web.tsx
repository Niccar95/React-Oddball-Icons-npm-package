import * as React from "react";
import type { SVGProps } from "react";
const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M33.83 52.92c8.253-.722 14.124-10.674 13.113-22.227-1.01-11.554-8.52-20.335-16.773-19.613S16.046 21.753 17.057 33.307c1.01 11.554 8.52 20.335 16.773 19.613Z"
    />
    <path fill="#000" d="m17.057 33.307 29.886-2.614z" />
    <path stroke="#000" strokeWidth={2} d="m17.057 33.307 29.886-2.614" />
    <path fill="#000" d="m30.17 11.08 3.66 41.84z" />
    <path
      stroke="#000"
      strokeWidth={2}
      d="m30.17 11.08 3.66 41.84M17.874 24.202q13.603 1.821 26.684-2.335M19.442 42.133q12.95-5.65 26.684-2.335"
    />
    <path
      stroke="#000"
      strokeWidth={2}
      d="M33.83 52.92c3.537-.31 5.585-9.927 4.574-21.48s-4.698-20.67-8.235-20.36-5.584 9.926-4.573 21.48 4.697 20.67 8.234 20.36Z"
    />
  </svg>
);
export default SvgWeb;
