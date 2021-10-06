import * as React from "react";

function SvgChevronDuoUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.403 18.425L5.99 17.01 12 10.999l6.01 6.011-1.413 1.413-4.6-4.6-4.6 4.6.006.002zm0-5.424L5.99 11.585 12 5.575l6.01 6.01-1.413 1.414-4.6-4.6-4.6 4.6.006.002z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronDuoUp;
