import * as React from "react";

function SvgGridSmallRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 17h-4v-4h4v4zm-6 0H7v-4h4v4zm6-6h-4V7h4v4zm-8 0a2 2 0 110-4 2 2 0 010 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGridSmallRound;