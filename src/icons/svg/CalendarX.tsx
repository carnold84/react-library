import * as React from "react";

function SvgCalendarX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a2 2 0 01-2-2V6a2 2 0 012-2h2V2h2v2h6V2h2v2h2a2 2 0 012 2v14a2 2 0 01-2 2zM5 10v10h14V10H5zm0-4v2h14V6H5zm4.706 12.707l-1.413-1.414L10.586 15l-2.293-2.293 1.414-1.414L12 13.586l2.293-2.292 1.414 1.414L13.414 15l2.293 2.293-1.413 1.413L12 16.414l-2.293 2.293h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCalendarX;
