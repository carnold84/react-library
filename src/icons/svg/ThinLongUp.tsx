import * as React from "react";

function SvgThinLongUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 5.5L12 2 8.5 5.5l.707.707L11.5 3.914V22h1V3.914l2.293 2.293.707-.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinLongUp;
