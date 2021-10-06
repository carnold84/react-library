import * as React from "react";

function SvgGroupAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 7a4 4 0 11-8 0 4 4 0 018 0zM9 7a2 2 0 10-4 0 2 2 0 004 0zM21 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-2 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM10 21v-4a3 3 0 10-6 0v4H2v-4a5 5 0 0110 0v4h-2zM20 20.5v.5h2v-.5a4.5 4.5 0 10-9 0v.5h2v-.5a2.5 2.5 0 015 0z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGroupAlt;
