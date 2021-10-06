import * as React from "react";

function SvgBarBottom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM5 16v3h14v-3H5zM5 5v9h14V5H5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarBottom;
