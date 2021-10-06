import * as React from "react";

function SvgWindowCodeBlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM4 7v12h16V7H4zm10.707 9.707l-1.413-1.413L15.586 13l-2.293-2.293 1.414-1.414L18.414 13l-3.706 3.706-.001.001zm-5.414 0L5.586 13l3.707-3.707 1.414 1.414L8.414 13l2.292 2.293-1.413 1.413v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWindowCodeBlock;
