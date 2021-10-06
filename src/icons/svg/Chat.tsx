import * as React from "react";

function SvgChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4v14l4.8-3.6c.346-.26.767-.4 1.2-.4h8a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2zm2 10V4h12v8H7.334a1.984 1.984 0 00-1.2.4L4 14z"
        fill="inherit"
      />
      <path
        d="M22 22V9a2 2 0 00-2-2v11l-2.134-1.6a1.984 1.984 0 00-1.2-.4H7a2 2 0 002 2h7c.433 0 .854.14 1.2.4L22 22z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChat;
