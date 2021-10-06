import * as React from "react";

function SvgShuffle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20h-5.5l2.049-2.05-3.129-3.13 1.41-1.41 3.13 3.129L20 14.5V20zM5.41 20L4 18.59 16.54 6.04 14.5 4H20v5.5l-2.04-2.04L5.411 20H5.41zm3.76-9.42L4 5.41 5.41 4l5.18 5.17-1.42 1.409v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShuffle;
