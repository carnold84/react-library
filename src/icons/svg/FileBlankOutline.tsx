import * as React from "react";

function SvgFileBlankOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7c.01 0 .022.002.032.006a.15.15 0 00.03.006c.088.006.175.023.259.051l.028.009a.988.988 0 01.359.228l6 6a.987.987 0 01.2.293c.01.022.017.045.025.068l.009.026c.028.083.044.17.049.258l.007.027C20 8.982 20 8.991 20 9v11a2 2 0 01-2 2zM6 4v16h12V10h-5a1 1 0 01-1-1V4H6zm8 1.414V8h2.586L14 5.414z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFileBlankOutline;
