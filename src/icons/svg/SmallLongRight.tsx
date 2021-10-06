import * as React from "react";

function SvgSmallLongRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 8v3H2v2h16v3l4-4-4-4z" fill="inherit" />
    </svg>
  );
}

export default SvgSmallLongRight;
