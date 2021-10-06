import * as React from "react";

function SvgMenuAlt02(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 18H9v-2h12v2zm0-5H3v-2h18v2zm0-5H9V6h12v2z" fill="inherit" />
    </svg>
  );
}

export default SvgMenuAlt02;
