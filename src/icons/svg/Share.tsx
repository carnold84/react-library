import * as React from "react";

function SvgShare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 15a3.478 3.478 0 002.357-.93l6.26 3.577a3.52 3.52 0 101.026-1.717l-6.26-3.577c.066-.25.102-.509.108-.768l6.15-3.515A3.489 3.489 0 1014 5.5c.004.288.043.575.117.853L8.433 9.6A3.5 3.5 0 105.5 15z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShare;
