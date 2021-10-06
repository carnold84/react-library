import * as React from "react";

function SvgBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 4h6.5a4.5 4.5 0 013.256 7.606A4.5 4.5 0 0113.5 20H6v-2h1V6H6V4zm3 7h3.5a2.5 2.5 0 000-5H9v5zm0 2v5h4.5a2.5 2.5 0 000-5H9z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBold;
