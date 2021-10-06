import * as React from "react";

function SvgListCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 19.411l-2.7-2.7 1.414-1.416L15 16.583l5.008-5L21.419 13 15 19.41v.001zM11 17H2v-2h9v2zm4-4H2v-2h13v2zm0-4H2V7h13v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListCheck;
