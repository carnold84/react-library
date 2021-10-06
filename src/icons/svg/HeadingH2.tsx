import * as React from "react";

function SvgHeadingH2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zM22 11.75C22 9.679 20.21 8 18 8s-4 1.679-4 3.75h2.133l.007-.144C16.218 10.707 17.02 10 18 10c1.03 0 1.867.784 1.867 1.75 0 .439-.173.841-.459 1.148L14 18.444V20h8v-2h-4.497l3.516-3.79.158-.18A3.59 3.59 0 0022 11.75z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeadingH2;
