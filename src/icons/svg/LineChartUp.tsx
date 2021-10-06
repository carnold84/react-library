import * as React from "react";

function SvgLineChartUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21H4a1 1 0 01-1-1V3h2v16h16v2zM8.373 16L7 14.656 11.856 9.9a.985.985 0 011.373 0l2.227 2.181L19.627 8 21 9.344 16.144 14.1a.985.985 0 01-1.373 0l-2.228-2.182L8.374 16h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLineChartUp;
