import * as React from "react";

function SvgFileNew(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7a.104.104 0 01.027 0h.006a.15.15 0 00.029.006c.088.006.175.023.259.051H13.363a.421.421 0 01.052.043.988.988 0 01.293.2l6 6a.987.987 0 01.2.293.735.735 0 01.023.066v.028c.028.083.044.17.049.258a.1.1 0 00.007.029v.006c.005.006.01.013.013.02v11a2 2 0 01-2 2zM6 4v16h12V10h-5a1 1 0 01-1-1V4H6zm8 1.414V8h2.586L14 5.414zM13 18h-2v-2H9v-2h2v-2h2v2h2v2h-2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFileNew;