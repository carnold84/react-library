import * as React from "react";

function SvgCaretUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 9.5l-5 5h10l-5-5z" fill="inherit" />
    </svg>
  );
}

export default SvgCaretUp;
