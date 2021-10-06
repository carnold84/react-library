import * as React from "react";

function SvgMessageWriting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 9H7v2h2V9zM11 9h2v2h-2V9zM17 9h-2v2h2V9z" fill="inherit" />
      <path
        d="M3 5v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2zm2 12V5h14v10H8.334a1.984 1.984 0 00-1.2.4L5 17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessageWriting;
