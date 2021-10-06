import * as React from "react";

function SvgSubLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 5v8H7.83l2.58-2.59L9 9l-5 5 5 5 1.41-1.41L7.83 15H20V5h-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSubLeft;
