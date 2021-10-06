import * as React from "react";

function SvgHelpCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-1-5v2h2v-2h-2zm1-10a2 2 0 012 2 1.95 1.95 0 01-.59 1.41l-1.24 1.26A4.015 4.015 0 0011 14.5v.5h2a3.42 3.42 0 011.17-2.83l.9-.92A3.16 3.16 0 0016 9a4 4 0 00-8 0h2a2 2 0 012-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHelpCircle;
