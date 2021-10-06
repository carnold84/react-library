import * as React from "react";

function SvgGridBig(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 19h-6v-6h6v6zm-8 0H5v-6h6v6zm8-8h-6V5h6v6zm-8 0H5V5h6v6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGridBig;
