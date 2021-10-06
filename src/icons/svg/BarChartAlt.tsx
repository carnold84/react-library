import * as React from "react";

function SvgBarChartAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 21H2V11a2 2 0 012-2h4V4a2 2 0 012-2h4a2 2 0 012 2v3h4a2 2 0 012 2v12zM16 9v10h4V9h-4zm-6-5v15h4V4h-4zm-6 7v8h4v-8H4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarChartAlt;
