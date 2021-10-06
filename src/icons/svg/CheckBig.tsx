import * as React from "react";

function SvgCheckBig(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.839 6.695L8.818 18.715 3.161 13.06l1.41-1.41 4.247 4.236 10.61-10.6 1.41 1.41z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckBig;
