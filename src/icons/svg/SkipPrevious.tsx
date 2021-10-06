import * as React from "react";

function SvgSkipPrevious(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 18l-8.5-6L18 6v12zM8 18H6V6h2v12z" fill="inherit" />
    </svg>
  );
}

export default SvgSkipPrevious;
