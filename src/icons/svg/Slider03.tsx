import * as React from "react";

function SvgSlider03(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 21H5v-2H2v-2h3v-2h2v6zm15-2H9v-2h13v2zm-5-4h-2v-2H2v-2h13V9.012h2V15zm5-2h-3v-2h3v2zM11 9H9V7H2V5h7V3h2v6zm11-2h-9V5h9v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSlider03;
