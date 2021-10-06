import * as React from "react";

function SvgCircleCheckOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-.016-2H12a8 8 0 10-.016 0zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCircleCheckOutline;
