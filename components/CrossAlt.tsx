import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 21.18c9.816 9.807 17.303 16.624 21.88 21.78"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 42.82c9.816-9.807 17.013-16.913 21.845-21.815"
    />
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={1.39}
      d="M37.2 27.71c.47-.022.82-.024 1.09.022.258.044.358.118.41.184.061.076.156.262.156.718a3.205 3.205 0 0 1-3.206 3.202 3.204 3.204 0 0 1-3.205-3.202c0-.456.094-.642.154-.718.053-.066.153-.14.41-.184.27-.046.621-.044 1.09-.022.445.02.99.06 1.55.06.561 0 1.107-.04 1.552-.06Z"
    />
    <path
      fill="#000"
      d="M36.53 28.684a.83.83 0 1 1-1.659 0 .83.83 0 0 1 1.66 0"
    />
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={1.39}
      d="M29.451 27.71c.469-.022.82-.024 1.09.022.257.044.357.118.41.184.06.076.155.262.155.718a3.204 3.204 0 0 1-3.206 3.202 3.204 3.204 0 0 1-3.205-3.202c0-.456.094-.642.155-.718.052-.066.152-.14.41-.184.27-.046.62-.044 1.09-.022.444.02.99.06 1.55.06s1.107-.04 1.551-.06Z"
    />
    <circle cx={27.951} cy={28.684} r={0.83} fill="#000" />
  </svg>
);
export default SvgCrossAlt;
