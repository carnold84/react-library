import * as React from "react";

function SvgCaretDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 14.5l5-5H7l5 5z" fill="inherit" />
    </svg>
  );
}

export default SvgCaretDown;
