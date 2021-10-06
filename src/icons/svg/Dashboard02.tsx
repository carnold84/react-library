import * as React from "react";

function SvgDashboard02(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 20H11v-7h11v7zM9 20H2v-7h7v7zm13-9H2V4h20v7z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDashboard02;
