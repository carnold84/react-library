import * as React from "react";

function SvgMonitor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 21H7v-2h2v-1H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v11a2 2 0 01-2 2h-6v1h2v2zM3 5v11h18V5H3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMonitor;
