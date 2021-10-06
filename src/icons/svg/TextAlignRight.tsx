import * as React from "react";

function SvgTextAlignRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 19H9v-2h12v2zm0-4H3v-2h18v2zm0-4H9V9h12v2zm0-4H3V5h18v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTextAlignRight;
