import * as React from "react";

function SvgLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 17h-3v-2h3a3 3 0 100-6h-3V7h3a5 5 0 010 10zm-7 0H7A5 5 0 017 7h3v2H7a3 3 0 100 6h3v2zm7-4H7v-2h10v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLink;
