import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.712}
      d="M32 9c-8.846 0-16 7.199-16 16.1C16 37.175 32 55 32 55s16-17.825 16-29.9C48 16.199 40.846 9 32 9"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.712}
      d="M31.983 30.679a5.707 5.707 0 0 0 5.709-5.705 5.707 5.707 0 0 0-5.709-5.705 5.707 5.707 0 0 0-5.708 5.705 5.707 5.707 0 0 0 5.708 5.705"
    />
    <path fill="#000" d="M34 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path stroke="#000" d="M37 23.5H26" />
  </svg>
);
export default SvgPin;
