import * as React from "react";

function SvgLongUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 5.83l2.59 2.58L17 7l-5-5-5 5 1.41 1.41L11 5.83V22h2V5.83z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLongUp;
