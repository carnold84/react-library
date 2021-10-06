import * as React from "react";

function SvgLineSx(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 10h-2v4h2v-4z" fill="inherit" />
    </svg>
  );
}

export default SvgLineSx;
