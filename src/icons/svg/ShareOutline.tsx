import * as React from "react";

function SvgShareOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 22a3.46 3.46 0 01-3.383-4.352l-6.26-3.578a3.494 3.494 0 11.576-4.47l5.683-3.249A3.494 3.494 0 0114 5.5a3.531 3.531 0 111.142 2.57l-6.15 3.515c-.007.26-.043.517-.109.768l6.26 3.577A3.495 3.495 0 1117.5 22zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-12-7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm12-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShareOutline;
