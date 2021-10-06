import * as React from "react";

function SvgInfoSquareOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1zM5 5v14h14V5H5zm9 12h-3v-4h-1v-2h3v4h1v2zm-1-8h-2V7h2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgInfoSquareOutline;
