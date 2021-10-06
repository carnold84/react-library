import * as React from "react";

function SvgShortUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 7.83l3.59 3.58L18 10l-6-6-6 6 1.41 1.41L11 7.83V20h2V7.83z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShortUp;
