import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 13v6h-2v-6H5v-2h6V5h2v6h6v2h-6z" fill="inherit" />
    </svg>
  );
}

export default SvgPlus;
