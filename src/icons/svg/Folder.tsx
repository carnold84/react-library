import * as React from "react";

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h6a1 1 0 01.707.293L12.414 5H20a2 2 0 012 2v12a2 2 0 01-2 2zM4 7v12h16V7H4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFolder;
