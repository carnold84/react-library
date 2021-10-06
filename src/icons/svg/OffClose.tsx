import * as React from "react";

function SvgOffClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22A9.99 9.99 0 012 12v-.2a10.005 10.005 0 0117.074-6.874A10 10 0 0112 22zm0-8.59L14.59 16 16 14.59 13.41 12 16 9.41 14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.411v-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgOffClose;
