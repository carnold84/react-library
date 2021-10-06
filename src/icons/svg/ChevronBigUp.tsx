import * as React from "react";

function SvgChevronBigUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.485 15.535L12 7.05l-8.485 8.485L4.93 16.95 12 9.878l7.071 7.072 1.414-1.415z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronBigUp;
