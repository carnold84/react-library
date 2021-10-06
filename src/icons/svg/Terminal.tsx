import * as React from "react";

function SvgTerminal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2zM4 6v12h16V6H4zm14 10h-6v-2h6v2zM7.414 16L6 14.586l2.293-2.293L6 10l1.414-1.414 3.707 3.707L7.415 16h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTerminal;
