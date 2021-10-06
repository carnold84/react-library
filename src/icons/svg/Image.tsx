import * as React from "react";

function SvgImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM5 5v14h14V5H5zm13 12H6l3-4 1 1 3-4 5 7zm-9.5-6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgImage;
