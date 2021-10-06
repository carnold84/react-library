import * as React from "react";

function SvgLabel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 19l-11-.01a2 2 0 01-2-1.99V7a2 2 0 012-1.99l11-.01a2 2 0 011.63.84L21.5 12l-4.37 6.16a2 2 0 01-1.63.84zM4.5 7v10h11l3.55-5-3.55-5h-11z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLabel;
