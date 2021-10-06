import * as React from "react";

function SvgWindowSidebar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM10 7v12h10V7H10zM4 7v12h4V7H4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWindowSidebar;
