import * as React from "react";

function SvgGridHorizontalRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 17h-4v-4h4v4zm-6 0h-4v-4h4v4zm-6 0H4v-4h4v4zm12-6h-4V7h4v4zm-8 0a2 2 0 110-4 2 2 0 010 4zm-4 0H4V7h4v4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGridHorizontalRound;
