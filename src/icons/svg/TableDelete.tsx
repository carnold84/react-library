import * as React from "react";

function SvgTableDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 10h-6v11H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8h-2v-3zm-8 0H5v4h6v-4zm0 9v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5z"
        fill="inherit"
      />
      <path d="M16 18v-2h8v2h-8z" fill="inherit" />
    </svg>
  );
}

export default SvgTableDelete;
