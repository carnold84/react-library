import * as React from "react";

function SvgAddColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 4v8.101a7.018 7.018 0 00-2-1.427V4a2 2 0 012-2h4a2 2 0 012 2v16a2 2 0 01-2 2h-4c-.033 0-.066 0-.099-.002A7.017 7.017 0 0015.326 20H18V4h-4z"
        fill="inherit"
      />
      <path
        d="M14 17a5 5 0 11-10 0 5 5 0 0110 0zm-4 3v-2h2v-2h-2v-2H8v2H6v2h2v2h2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgAddColumn;
