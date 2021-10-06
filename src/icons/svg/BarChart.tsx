import * as React from "react";

function SvgBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21h-3V11h3v10zm-5 0h-3V8h3v13zm-5 0H8V5h3v16zm-5 0H3v-8h3v8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarChart;
