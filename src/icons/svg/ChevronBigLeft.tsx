import * as React from "react";

function SvgChevronBigLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.535 3.515L7.05 12l8.485 8.485 1.415-1.414L9.878 12l7.072-7.071-1.415-1.414z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronBigLeft;
