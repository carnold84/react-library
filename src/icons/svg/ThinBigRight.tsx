import * as React from "react";

function SvgThinBigRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 18.5L24 12l-6.5-6.5-.707.707 5.293 5.293H0v1h22.086l-5.293 5.293.707.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinBigRight;
