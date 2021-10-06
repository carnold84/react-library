import * as React from "react";

function SvgError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgError;