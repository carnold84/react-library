import * as React from "react";

function SvgHeadingH1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zM20 20V8h-1.5l-2.5.67v2.07l2-.536V20h2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeadingH1;
