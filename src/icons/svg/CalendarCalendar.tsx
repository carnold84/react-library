import * as React from "react";

function SvgCalendarCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.999 22h-14a2 2 0 01-2-2V6a2 2 0 012-2h2V2h2v2h6V2h2v2h2a2 2 0 012 2v14a2 2 0 01-2 2zm-14-12v10h14V10h-14zm0-4v2h14V6h-14z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCalendarCalendar;
