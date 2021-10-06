import * as React from "react";

function SvgCaretLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.5 12l5 5V7l-5 5z" fill="inherit" />
    </svg>
  );
}

export default SvgCaretLeft;
