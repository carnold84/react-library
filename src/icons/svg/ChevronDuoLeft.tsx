import * as React from "react";

function SvgChevronDuoLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.585 18.01L5.575 12l6.01-6.01L13 7.404l-4.6 4.6 4.6 4.6-1.414 1.406h-.001zm5.425 0L10.999 12l6.011-6.01 1.414 1.414-4.6 4.6 4.6 4.6-1.413 1.406h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronDuoLeft;
