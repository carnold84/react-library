import * as React from "react";

function SvgLineBreak(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 6v6H7.83l2.58-2.59L9 8l-5 5 5 5 1.41-1.41L7.83 14H20V6h-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLineBreak;
