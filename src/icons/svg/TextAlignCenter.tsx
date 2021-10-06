import * as React from "react";

function SvgTextAlignCenter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 19H6v-2h12v2zm3-4H3v-2h18v2zm-3-4H6V9h12v2zm3-4H3V5h18v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTextAlignCenter;
