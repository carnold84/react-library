import * as React from "react";

function SvgDeleteColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 4v16h2.674c.355.749.84 1.424 1.425 1.998A2.015 2.015 0 0110 22H6a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2v6.674a7.018 7.018 0 00-2 1.427V4H6z"
        fill="inherit"
      />
      <path
        d="M10 17c0-1.636.786-3.088 2-4a5 5 0 11-2 4zm2 1h6v-2h-6v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDeleteColumn;
