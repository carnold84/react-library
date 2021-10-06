import * as React from "react";

function SvgMobile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 23H7a2 2 0 01-2-2V2.913A2 2 0 017 1h10a2 2 0 012 2v18a2 2 0 01-2 2zM7 3v18h10V3h-2a2 2 0 01-2 2h-2a2 2 0 01-2-2H7z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMobile;
