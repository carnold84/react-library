import * as React from "react";

function SvgShortDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 16.17l-3.59-3.58L6 14l6 6 6-6-1.41-1.41L13 16.17V4h-2v12.17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShortDown;
