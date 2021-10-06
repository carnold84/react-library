import * as React from "react";

function SvgItalic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 20H7v-2h1.927l4.116-12H11V4h6v2h-1.927l-4.116 12H13v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgItalic;
