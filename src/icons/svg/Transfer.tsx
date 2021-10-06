import * as React from "react";

function SvgTransfer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 20l-5-4 5-4v3h13v2H9v3zm6-8V9H2V7h13V4l5 4-5 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTransfer;
