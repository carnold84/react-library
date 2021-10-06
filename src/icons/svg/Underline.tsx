import * as React from "react";

function SvgUnderline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 4H7v7a5 5 0 0010 0V4h-2v7a3 3 0 11-6 0V4zM19 20v-2H5v2h14z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUnderline;
