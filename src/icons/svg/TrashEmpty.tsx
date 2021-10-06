import * as React from "react";

function SvgTrashEmpty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 22H7a2 2 0 01-2-2V7H3V5h4V4a2 2 0 012-2h6a2 2 0 012 2v1h4v2h-2v13a2 2 0 01-2 2zM7 7v13h10V7H7zm2-3v1h6V4H9z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTrashEmpty;
