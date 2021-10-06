import * as React from "react";

function SvgWindowClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM4 7v12h16V7H4zm5.706 9.708l-1.413-1.415L10.586 13l-2.293-2.293 1.414-1.414L12 11.586l2.293-2.293 1.414 1.414L13.414 13l2.293 2.293-1.413 1.413L12 14.414l-2.293 2.293-.001.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWindowClose;
