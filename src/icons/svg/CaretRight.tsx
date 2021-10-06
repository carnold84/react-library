import * as React from "react";

function SvgCaretRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.5 12l-5-5v10l5-5z" fill="inherit" />
    </svg>
  );
}

export default SvgCaretRight;
