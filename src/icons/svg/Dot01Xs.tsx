import * as React from "react";

function SvgDot01Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 14a2 2 0 110-4 2 2 0 010 4z" fill="inherit" />
    </svg>
  );
}

export default SvgDot01Xs;
