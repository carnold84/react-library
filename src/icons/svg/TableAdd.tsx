import * as React from "react";

function SvgTableAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 10v11H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5h-8zm-2 0H5v4h6v-4zm0 9v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5z"
        fill="inherit"
      />
      <path d="M19 21v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2z" fill="inherit" />
    </svg>
  );
}

export default SvgTableAdd;
