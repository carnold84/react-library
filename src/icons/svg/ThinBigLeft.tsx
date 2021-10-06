import * as React from "react";

function SvgThinBigLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 5.5L0 12l6.5 6.5.707-.707L1.914 12.5H24v-1H1.914l5.293-5.293L6.5 5.5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinBigLeft;
