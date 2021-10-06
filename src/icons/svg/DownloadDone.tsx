import * as React from "react";

function SvgDownloadDone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 19H5v-2h14v2zm-9-4.58l-4-4 1.41-1.41L10 11.59 16.59 5 18 6.42l-8 8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDownloadDone;
