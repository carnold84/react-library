import * as React from "react";

function SvgFileBlankFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7a.104.104 0 01.027 0h.006a.15.15 0 00.029.006c.088.006.175.023.259.051H13.363a.421.421 0 01.052.043.988.988 0 01.293.2l6 6a.987.987 0 01.2.293.735.735 0 01.023.066l.01.028c.028.083.044.17.049.258a.1.1 0 00.007.029v.006A.112.112 0 0120 9v11a2 2 0 01-2 2zM13 4v5h5l-5-5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFileBlankFill;
