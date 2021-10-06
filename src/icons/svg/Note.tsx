import * as React from "react";

function SvgNote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8a.126.126 0 01-.006.034.149.149 0 00-.006.028 1.017 1.017 0 01-.051.259l-.009.027a.988.988 0 01-.225.359l-7 7A1 1 0 0113 21zM5 5v14h7v-6a1 1 0 011-1h6V5H5zm9 9v3.587L17.586 14H14z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNote;
