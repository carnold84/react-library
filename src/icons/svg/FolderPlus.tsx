import * as React from "react";

function SvgFolderPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h6a1 1 0 01.707.293L12.414 5H20a2 2 0 012 2v12a2 2 0 01-2 2zM4 7v12h16V7H4zm9 10h-2v-3H8v-2h3V9h2v3h3v2h-3v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFolderPlus;
