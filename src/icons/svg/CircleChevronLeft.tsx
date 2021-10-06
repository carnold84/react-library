import * as React from "react";

function SvgCircleChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8.18v1.783V12a8.009 8.009 0 00-8-8zm1.45 12.9L8.5 11.95 13.45 7l1.414 1.414-3.536 3.536 3.535 3.536-1.412 1.414h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCircleChevronLeft;
