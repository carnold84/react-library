import * as React from "react";

function SvgParagraph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9a5 5 0 015-5h7v2h-1v14h-2V6h-2v14h-2v-6a5 5 0 01-5-5zm5 3V6a3 3 0 000 6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgParagraph;
