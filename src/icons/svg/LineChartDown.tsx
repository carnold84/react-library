import * as React from "react";

function SvgLineChartDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21H4a1 1 0 01-1-1V3h2v16h16v2zm-1.373-5l-4.17-4.082-2.228 2.182a.985.985 0 01-1.373 0L7 9.344 8.373 8l4.17 4.082L14.77 9.9a.985.985 0 011.373 0L21 14.656 19.627 16z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLineChartDown;
