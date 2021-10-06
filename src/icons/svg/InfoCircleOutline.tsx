import * as React from "react";

function SvgInfoCircleOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-8-9.828A8 8 0 104 12v.172zM14 17h-3v-4h-1v-2h3v4h1v2zm-1-8h-2V7h2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgInfoCircleOutline;
