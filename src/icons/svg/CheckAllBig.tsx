import * as React from "react";

function SvgCheckAllBig(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.333 13.065l5.655 5.655 1.41-1.42-5.65-5.65-1.415 1.415zm21.914-7.784l-10.599 10.61-4.237-4.248-1.43 1.41 5.667 5.667 12.02-12.019-1.42-1.42zM18.01 6.7l-1.41-1.42-6.371 6.37 1.42 1.41 6.36-6.36z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckAllBig;
