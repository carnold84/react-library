import * as React from "react";

function SvgBarcode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4h3v16H2V4zM6 4h1v16H6V4zM11 4H9v16h2V4zM12 4h2v16h-2V4zM15 4h1v16h-1V4zM20 4h-3v16h3V4zM21 4h1v16h-1V4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarcode;
