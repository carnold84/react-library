import * as React from "react";

function SvgStopwatch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21a8 8 0 118-8 8.01 8.01 0 01-8 8zm0-14a6 6 0 106 6 6.007 6.007 0 00-6-6zm1 7h-2V9h2v5zm6.293-6.293l-2-2 1.414-1.414 2 2-1.413 1.413-.001.001zM15 4H9V2h6v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgStopwatch;
