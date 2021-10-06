import * as React from "react";

function SvgLineM(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 6h-2v12h2V6z" fill="inherit" />
    </svg>
  );
}

export default SvgLineM;
