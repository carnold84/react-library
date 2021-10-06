import * as React from "react";

function SvgRefresh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.995 4a8 8 0 107.735 10h-2.081a6 6 0 11-5.654-8 5.92 5.92 0 014.223 1.78L13 11h7V4l-2.351 2.35A7.965 7.965 0 0011.995 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgRefresh;
