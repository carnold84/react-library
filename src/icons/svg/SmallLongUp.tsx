import * as React from "react";

function SvgSmallLongUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 6h3v16h2V6h3l-4-4-4 4z" fill="inherit" />
    </svg>
  );
}

export default SvgSmallLongUp;
