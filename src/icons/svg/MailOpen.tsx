import * as React from "react";

function SvgMailOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 22H4a2 2 0 01-2-2V9.049a2.031 2.031 0 01.971-1.632l8-4.8a2 2 0 012.057 0l8 4.8c.601.363.97 1.013.972 1.715V20a2 2 0 01-2 2zM4 9.868V20h16V9.868l-8 5.333-8-5.333zm8-5.536l-6.684 4.01L12 12.798l6.683-4.456L12 4.332z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMailOpen;
