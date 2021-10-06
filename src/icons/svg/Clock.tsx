import * as React from "react";

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm5 9h-6V7h2v4h4v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgClock;
