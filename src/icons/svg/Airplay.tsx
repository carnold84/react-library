import * as React from "react";

function SvgAirplay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6l6-6 6 6zM7 19H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-4v-2h4V5H3v12h4v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgAirplay;
