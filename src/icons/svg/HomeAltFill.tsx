import * as React from "react";

function SvgHomeAltFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 13l9.293-9.293a1 1 0 011.414 0L22 13h-2v8a1 1 0 01-1 1h-5v-7h-4v7H5a1 1 0 01-1-1v-8H2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeAltFill;
