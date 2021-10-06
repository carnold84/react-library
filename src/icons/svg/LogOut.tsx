import * as React from "react";

function SvgLogOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21h-9a2 2 0 01-2-2v-4h2v4h9V5h-9v4H8V5a2 2 0 012-2h9a2 2 0 012 2v14a2 2 0 01-2 2zm-7-5v-3H3v-2h9V8l5 4-5 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLogOut;
