import * as React from "react";

function SvgLongLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83 11l2.58-2.59L7 7l-5 5 5 5 1.41-1.41L5.83 13H22v-2H5.83z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLongLeft;
