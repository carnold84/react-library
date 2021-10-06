import * as React from "react";

function SvgGridVerticalRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 20h-4v-4h4v4zm-6 0H7v-4h4v4zm6-6h-4v-4h4v4zm-8 0a2 2 0 110-4 2 2 0 010 4zm8-6h-4V4h4v4zm-6 0H7V4h4v4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGridVerticalRound;
