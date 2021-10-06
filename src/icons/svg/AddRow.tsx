import * as React from "react";

function SvgAddRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 14A5 5 0 117 4a5 5 0 010 10zm-3-4h2v2h2v-2h2V8H8V6H6v2H4v2z"
        fill="inherit"
      />
      <path
        d="M20 14h-8.101a7.018 7.018 0 001.427-2H20a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4c0-.033 0-.066.002-.099A7.018 7.018 0 004 15.326V18h16v-4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgAddRow;
