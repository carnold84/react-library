import * as React from "react";

function SvgLongDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 18.17l-2.59-2.58L7 17l5 5 5-5-1.41-1.41L13 18.17V2h-2v16.17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLongDown;
