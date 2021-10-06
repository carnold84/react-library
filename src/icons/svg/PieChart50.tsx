import * as React from "react";

function SvgPieChart50(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-.016-2H12V4a8 8 0 10-.016 16z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPieChart50;
