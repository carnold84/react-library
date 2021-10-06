import * as React from "react";

function SvgShortRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.17 13l-3.58 3.59L14 18l6-6-6-6-1.41 1.41L16.17 11H4v2h12.17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShortRight;
