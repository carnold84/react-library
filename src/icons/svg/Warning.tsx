import * as React from "react";

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.266 20.998H2.733a1 1 0 01-.866-1.5l9.266-16a1 1 0 011.73 0l9.267 16a1 1 0 01-.865 1.5zm-10.266-5v2h1.998v-2H11zm0-7v5h2v-5h-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWarning;
