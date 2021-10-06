import * as React from "react";

function SvgHomeX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 20H5a1 1 0 01-1-1v-7.86a1 1 0 01.281-.695l5.5-5.7a1 1 0 011.439 0l2.136 2.215-1.434 1.394L10.5 6.88 6 11.54v6.455h11v1A1 1 0 0116 20zm-1.658-4l-1.413-1.414 2.121-2.122-2.121-2.124 1.414-1.414 2.121 2.121 2.121-2.121L20 10.34l-2.121 2.124L20 14.586l-1.414 1.413-2.122-2.121L14.343 16h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeX;