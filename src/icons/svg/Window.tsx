import * as React from "react";

function SvgWindow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM4 7v12h16V7H4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWindow;
