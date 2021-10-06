import * as React from "react";

function SvgFastRewind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 18l-8.5-6L20 6v12zm-9 0l-8.5-6L11 6v12z" fill="inherit" />
    </svg>
  );
}

export default SvgFastRewind;
