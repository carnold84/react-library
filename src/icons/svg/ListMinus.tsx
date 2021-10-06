import * as React from "react";

function SvgListMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 17h-9v-2h9v2zm-11 0H2v-2h9v2zm4-4H2v-2h13v2zm0-4H2V7h13v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListMinus;
