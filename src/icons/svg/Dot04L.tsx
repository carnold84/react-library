import * as React from "react";

function SvgDot04L(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 17a5 5 0 110-10 5 5 0 010 10z" fill="inherit" />
    </svg>
  );
}

export default SvgDot04L;
