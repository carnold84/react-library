import * as React from "react";

function SvgFolderOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 20H3a.984.984 0 01-.993-1H2V5a2 2 0 012-2h6a1 1 0 01.616.213L12.9 5H18a2 2 0 012 2v4h1a1 1 0 01.919 1.394l-3 7A1 1 0 0118 20zM6.66 13l-2.143 5h12.824l2.143-5H6.66zM4 7v7.13l1.081-2.524A1 1 0 016 11h12V7H4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFolderOpen;