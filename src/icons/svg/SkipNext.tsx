import * as React from "react";

function SvgSkipNext(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 18h-2V6h2v12zM6 18V6l8.5 6L6 18z" fill="inherit" />
    </svg>
  );
}

export default SvgSkipNext;
