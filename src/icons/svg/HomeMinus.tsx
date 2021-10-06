import * as React from "react";

function SvgHomeMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 20H5a1 1 0 01-1-1v-7.86a1 1 0 01.281-.695l5.5-5.7a1 1 0 011.439 0l2.8 2.9-1.43 1.402L10.5 6.88 6 11.54v6.455h11v1A1 1 0 0116 20zm4-6h-8v-2h8v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeMinus;
