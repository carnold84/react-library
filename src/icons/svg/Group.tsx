import * as React from "react";

function SvgGroup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 3a5 5 0 100 10A5 5 0 009 3zM6 8a3 3 0 116 0 3 3 0 01-6 0zM16.908 8.218A2 2 0 0016 8V6a4 4 0 11-2.357 7.232l1.178-1.616a2 2 0 102.087-3.398zM19.998 21A3.999 3.999 0 0016 17.002V15a6.001 6.001 0 016 6h-2.002zM16 21h-2a5 5 0 00-10 0H2a7 7 0 1114 0z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGroup;