import * as React from "react";

function SvgInfoSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1zM10 11v2h1v4h3v-2h-1v-4h-3zm1-4v2h2V7h-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgInfoSquare;
