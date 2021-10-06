import * as React from "react";

function SvgPath(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 22a4 4 0 112.032-7.446l6.522-6.522a3.995 3.995 0 111.414 1.415l-6.521 6.521A4 4 0 016 22zm0-6a2 2 0 100 4 2 2 0 000-4zM18 4a2 2 0 102 2.09v.4V6a2 2 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPath;
