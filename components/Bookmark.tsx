import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.273 21a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v36l-15-6.222-15 6.222z"
    />
    <path
      stroke="#000"
      strokeWidth={2}
      d="M44.72 17.136c-1.864-.992 3.607-4.149 3.959-8.508.352-4.36 3.243 5.59.415 8.139-2.828 2.547-2.51 1.361-4.374.369ZM19.48 17.136c1.863-.992-3.607-4.149-3.96-8.508-.351-4.36-3.242 5.59-.414 8.139 2.828 2.547 2.509 1.361 4.373.369Z"
    />
  </svg>
);
export default SvgBookmark;
