import * as React from "react";

function SvgLongRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.17 13l-2.58 2.59L17 17l5-5-5-5-1.41 1.41L18.17 11H2v2h16.17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLongRight;
