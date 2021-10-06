import * as React from "react";

function SvgLineL(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 4h-2v16h2V4z" fill="inherit" />
    </svg>
  );
}

export default SvgLineL;
