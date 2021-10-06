import * as React from "react";

function SvgCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 22H4a1.934 1.934 0 01-2-2V10a1.934 1.934 0 012-2h4V4a1.934 1.934 0 012-2h10a1.934 1.934 0 012 2v10a1.935 1.935 0 01-2 2h-4v4a1.935 1.935 0 01-2 2zM4 10v10h10v-4h-4a1.935 1.935 0 01-2-2v-4H4zm6-6v10h10V4H10z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCopy;
