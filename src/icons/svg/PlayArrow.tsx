import * as React from "react";

function SvgPlayArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 19l11-7L8 5v14z" fill="inherit" />
    </svg>
  );
}

export default SvgPlayArrow;
