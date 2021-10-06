import * as React from "react";

function SvgHeading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 11V4h2v16h-2v-7H8v7H6V4h2v7h8z" fill="inherit" />
    </svg>
  );
}

export default SvgHeading;
