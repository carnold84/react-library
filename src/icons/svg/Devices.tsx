import * as React from "react";

function SvgDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 21H4a2 2 0 01-2-2V9a2 2 0 012-2h1V5a2 2 0 012-2h13a2 2 0 012 2v11a2 2 0 01-2 2h-8v1a2 2 0 01-2 2zM4 9v10h6V9H4zm3-2h3a2 2 0 012 2v7h8V5H7v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDevices;
