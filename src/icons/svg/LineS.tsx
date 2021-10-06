import * as React from "react";

function SvgLineS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 8h-2v8h2V8z" fill="inherit" />
    </svg>
  );
}

export default SvgLineS;
