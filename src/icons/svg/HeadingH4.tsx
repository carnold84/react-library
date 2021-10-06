import * as React from "react";

function SvgHeadingH4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zM22 17.96V16h-1v-3.08h-2V16h-3l3.5-8h-2.08L14 16v1.96h5V20h2v-2.04h1z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeadingH4;
