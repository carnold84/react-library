import * as React from "react";

function SvgListPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 20h-2v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-7-3H2v-2h10v2zm3-4H2v-2h13v2zm0-4H2V7h13v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListPlus;
