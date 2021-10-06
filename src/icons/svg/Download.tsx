import * as React from "react";

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5v-2h14v2zm-7-4l-6-6 1.41-1.41L11 14.17V2h2v12.17l3.59-3.58L18 12l-6 6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDownload;
