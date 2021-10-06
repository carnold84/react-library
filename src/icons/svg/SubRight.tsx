import * as React from "react";

function SvgSubRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 5v8h10.17l-2.58-2.59L15 9l5 5-5 5-1.41-1.41L16.17 15H4V5h2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSubRight;
