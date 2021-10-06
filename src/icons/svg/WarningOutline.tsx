import * as React from "react";

function SvgWarningOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.266 20.998H2.733a1 1 0 01-.866-1.5l9.266-16a1 1 0 011.73 0l9.267 16a1 1 0 01-.865 1.5zM12 5.998l-7.531 13h15.064L12 5.998zm.995 9.001h-2V9.998h2v5.001z"
        fill="inherit"
      />
      <path d="M11 16h2v2h-2v-2z" fill="inherit" />
    </svg>
  );
}

export default SvgWarningOutline;
