import * as React from "react";

function SvgChevronBigRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.465 20.485L16.95 12 8.465 3.515 7.05 4.929 14.122 12 7.05 19.071l1.415 1.414z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronBigRight;
