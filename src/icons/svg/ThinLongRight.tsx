import * as React from "react";

function SvgThinLongRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5 15.5L22 12l-3.5-3.5-.707.707 2.293 2.293H2v1h18.086l-2.293 2.293.707.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinLongRight;
