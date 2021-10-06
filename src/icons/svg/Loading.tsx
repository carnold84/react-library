import * as React from "react";

function SvgLoading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 16a2 2 0 110-4 2 2 0 010 4zm6-2a2 2 0 110-4 2 2 0 010 4zm6-2a2 2 0 110-4 2 2 0 010 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLoading;
