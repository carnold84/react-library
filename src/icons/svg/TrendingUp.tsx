import * as React from "react";

function SvgTrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 13.414a1 1 0 00.707.293h.586a1 1 0 00.707-.293l4.707-4.707L22 11V5h-6l2.293 2.293L14 11.586l-3-3a1 1 0 00-.707-.293h-.586A1 1 0 009 8.586l-6.707 6.707 1.414 1.414L10 10.414l3 3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTrendingUp;
