import * as React from "react";

function SvgThinLongDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 18.5L12 22l3.5-3.5-.707-.707-2.293 2.293V2h-1v18.086l-2.293-2.293-.707.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinLongDown;
