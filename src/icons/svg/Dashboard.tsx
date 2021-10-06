import * as React from "react";

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21h-8v-6h8v6zm-10 0H3V11h8v10zm10-8h-8V3h8v10zM11 9H3V3h8v6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDashboard;
