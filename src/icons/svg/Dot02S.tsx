import * as React from "react";

function SvgDot02S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 15a3 3 0 110-6 3 3 0 010 6z" fill="inherit" />
    </svg>
  );
}

export default SvgDot02S;
