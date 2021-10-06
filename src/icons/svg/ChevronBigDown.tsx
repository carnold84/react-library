import * as React from "react";

function SvgChevronBigDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.515 8.465L12 16.95l8.485-8.485L19.07 7.05 12 14.122 4.929 7.05 3.515 8.465z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronBigDown;
