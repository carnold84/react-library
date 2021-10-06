import * as React from "react";

function SvgSmallLongDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 18h-3V2h-2v16H8l4 4 4-4z" fill="inherit" />
    </svg>
  );
}

export default SvgSmallLongDown;
