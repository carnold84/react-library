import * as React from "react";

function SvgTrello(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.75 21H5.25A2.253 2.253 0 013 18.75V5.25A2.253 2.253 0 015.25 3h13.5A2.253 2.253 0 0121 5.25v13.5A2.253 2.253 0 0118.75 21zM6.42 5.34c-.596 0-1.08.484-1.08 1.08v10.215c0 .596.484 1.08 1.08 1.08h3.33c.596 0 1.08-.484 1.08-1.08V6.42c0-.596-.484-1.08-1.08-1.08H6.42zm7.83 0c-.596 0-1.08.484-1.08 1.08v5.715c0 .596.484 1.08 1.08 1.08h3.33c.596 0 1.08-.484 1.08-1.08V6.42c0-.596-.484-1.08-1.08-1.08h-3.33z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTrello;
