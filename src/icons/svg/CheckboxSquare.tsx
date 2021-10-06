import * as React from "react";

function SvgCheckboxSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 19H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2zM7 7v10h10V7H7zm8 8H9V9h6v6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckboxSquare;
