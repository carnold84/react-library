import * as React from "react";

function SvgLaptop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 19H3a2 2 0 01-2-2v-1h2V7a2 2 0 012-2h14a2 2 0 012 2v9h2v1a2 2 0 01-2 2zM5 7v9h14V7H5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLaptop;
