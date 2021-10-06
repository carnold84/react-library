import * as React from "react";

function SvgBarChartCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 110-16 8 8 0 010 16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm13 4h2V9h-2v7zm-8 0h2v-5H7v5zm4 0h2V6h-2v10z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarChartCircle;
