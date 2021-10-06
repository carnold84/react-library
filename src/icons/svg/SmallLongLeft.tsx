import * as React from "react";

function SvgSmallLongLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 16v-3h16v-2H6V8l-4 4 4 4z" fill="inherit" />
    </svg>
  );
}

export default SvgSmallLongLeft;
