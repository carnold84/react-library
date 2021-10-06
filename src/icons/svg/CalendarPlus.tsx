import * as React from "react";

function SvgCalendarPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a2 2 0 01-2-2V6a2 2 0 012-2h2V2h2v2h6V2h2v2h2a2 2 0 012 2v14a2 2 0 01-2 2zM5 10v10h14V10H5zm0-4v2h14V6H5zm8 12h-2v-2H9v-2h2v-2h2v2h2v2h-2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCalendarPlus;
