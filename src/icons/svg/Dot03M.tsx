import * as React from "react";

function SvgDot03M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 16a4 4 0 110-8 4 4 0 010 8z" fill="inherit" />
    </svg>
  );
}

export default SvgDot03M;
