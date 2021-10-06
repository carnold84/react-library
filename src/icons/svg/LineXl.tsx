import * as React from "react";

function SvgLineXl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 2h-2v20h2V2z" fill="inherit" />
    </svg>
  );
}

export default SvgLineXl;