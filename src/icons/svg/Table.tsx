import * as React from "react";

function SvgTable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 10v4h6v-4h-6zm-2 0H5v4h6v-4zm2 9h6v-3h-6v3zm-2 0v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5zm8-2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTable;
