import * as React from "react";

function SvgDoughnutChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.051 21.949a10 10 0 01-1-19.949v4.04a5.994 5.994 0 106.91 6.909H22a10.015 10.015 0 01-9.95 9zm9.95-11h-4.04a5.993 5.993 0 00-4.91-4.909V2a10.022 10.022 0 018.95 8.948v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDoughnutChart;