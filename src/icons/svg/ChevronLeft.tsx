import * as React from "react";

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.288 12l6.01 6.01 1.414-1.414-4.6-4.6 4.6-4.6-1.414-1.406L8.288 12z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronLeft;
