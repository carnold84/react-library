import * as React from "react";

function SvgLongUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.979 8.45l.007 3.55H19V5h-7v2.014l3.55.007L5 17.571 6.429 19l10.55-10.55z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLongUpRight;
