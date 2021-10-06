import * as React from "react";

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.713 12l-6.01-6.01-1.415 1.414 4.6 4.6-4.6 4.593 1.414 1.414L15.713 12z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronRight;
