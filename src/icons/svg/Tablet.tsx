import * as React from "react";

function SvgTablet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 23H4a2 2 0 01-2-2V3a2 2 0 012-2h16a2 2 0 012 2v18a2 2 0 01-2 2zM4 3v18h16V3H4zm8 17a1 1 0 110-2 1 1 0 010 2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTablet;
