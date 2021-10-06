import * as React from "react";

function SvgFileFind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7c.265 0 .52.105.707.293l6 6A.991.991 0 0120 9v11a2 2 0 01-2 2zM6 4v16h10.586l-2.566-2.566A3.941 3.941 0 0112 18a4.044 4.044 0 113.434-1.98L18 18.588V9.414L12.586 4H6zm6 8a2 2 0 100 4 2 2 0 000-4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFileFind;
