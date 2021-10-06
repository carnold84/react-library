import * as React from "react";

function SvgExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2v-4h2v4h14V5H5v4H3V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm-8-5v-3H3v-2h8V8l5 4-5 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgExit;
