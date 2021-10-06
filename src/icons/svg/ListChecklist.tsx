import * as React from "react";

function SvgListChecklist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 5h13v2H8V5zm-5-.5h3v3H3v-3zm0 6h3v3H3v-3zm0 6h3v3H3v-3zM8 11h13v2H8v-2zm0 6h13v2H8v-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListChecklist;
