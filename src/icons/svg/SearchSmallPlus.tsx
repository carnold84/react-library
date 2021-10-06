import * as React from "react";

function SvgSearchSmallPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.577 20l-5.767-5.766a5.035 5.035 0 01-6.336-7.76 5.035 5.035 0 017.761 6.335L18 18.576 16.577 20zM8.034 7.014a3.02 3.02 0 10-.004 6.04 3.02 3.02 0 00.004-6.04zM19 11h-2V9h-2V7h2V5h2v2h2v2h-2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSearchSmallPlus;
