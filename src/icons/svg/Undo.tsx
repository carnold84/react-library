import * as React from "react";

function SvgUndo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 4h2v2.557a7 7 0 11-1.037 10.011l1.62-1.184A5 5 0 109.408 8H12v2H6V4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUndo;
