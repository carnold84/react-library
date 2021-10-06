import * as React from "react";

function SvgMessageRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.124 12.114l.003.012a5.909 5.909 0 003.336 4.16L12 17.894V16h2a5 5 0 005-5v-1a5 5 0 00-5-5h-4a5 5 0 00-5 5v1c0 .38.042.748.121 1.1l.003.014zM14 21l-6.364-2.893A7.909 7.909 0 013.17 12.54 7.024 7.024 0 013 11v-1a7 7 0 017-7h4a7 7 0 017 7v1a7 7 0 01-7 7v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessageRound;
