import * as React from "react";

function SvgMoveHorizontal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 11V7l-5 5 5 5v-4h10v4l5-5-5-5v4H7z" fill="inherit" />
    </svg>
  );
}

export default SvgMoveHorizontal;
