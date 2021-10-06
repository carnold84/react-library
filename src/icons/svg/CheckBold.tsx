import * as React from "react";

function SvgCheckBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.818 19.779l-6.364-6.364 2.83-2.83 3.534 3.544 9.898-9.908 2.83 2.83L8.818 19.779z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckBold;
