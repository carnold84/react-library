import * as React from "react";

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 13v-2h14v2H5z" fill="inherit" />
    </svg>
  );
}

export default SvgMinus;
