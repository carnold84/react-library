import * as React from "react";

function SvgFastForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 18V6l8.5 6-8.5 6zm-9 0V6l8.5 6L4 18z" fill="inherit" />
    </svg>
  );
}

export default SvgFastForward;
