import * as React from "react";

function SvgHomePlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 20H5a1 1 0 01-1-1v-7.86a1 1 0 01.281-.695l5.5-5.7a1 1 0 011.439 0l1.651 1.713-1.433 1.394-.938-.972L6 11.54v6.455h11v1A1 1 0 0116 20zm1-4h-2v-3h-3v-2h3V8h2v3h3v2h-3v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomePlus;