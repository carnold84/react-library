import * as React from "react";

function SvgCombineCells(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 6h-2v3h2V6zM11 10h2v4h-2v-4zM13 15h-2v3h2v-3z"
        fill="inherit"
      />
      <path
        d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v14h14V5H5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCombineCells;
