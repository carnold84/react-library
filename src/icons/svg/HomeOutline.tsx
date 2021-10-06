import * as React from "react";

function SvgHomeOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a1 1 0 01-1-1v-9.586a1 1 0 01.293-.707l7-7a1 1 0 011.415 0l7 7a.994.994 0 01.292.707V21a1 1 0 01-1 1zm-9-7h4v5h4v-8.172l-6-6-6 6V20h4v-5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeOutline;
