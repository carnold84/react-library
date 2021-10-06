import * as React from "react";

function SvgChatAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 2a2 2 0 012 2H4v11.177a2 2 0 01-2-2V4a2 2 0 012-2h12z"
        fill="inherit"
      />
      <path
        d="M14 22l-2.667-2.823H8a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v9.177a2 2 0 01-2 2h-3.333L14 22zm1.805-4.823H20V8H8v9.177h4.195L14 19.087l1.805-1.91z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChatAlt;
