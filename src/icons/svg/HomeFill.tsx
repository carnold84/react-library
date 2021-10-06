import * as React from "react";

function SvgHomeFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.293 10.707l7-7a1 1 0 011.414 0l7 7a1 1 0 01.293.707V21a1 1 0 01-1 1h-5v-7h-4v7H5a1 1 0 01-1-1v-9.586a1 1 0 01.293-.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeFill;
