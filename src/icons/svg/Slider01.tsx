import * as React from "react";

function SvgSlider01(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 20a4 4 0 01-3.875-3H2v-2h2.126A4 4 0 118 20zm0-6a2 2 0 102 2.09v.4V16a2 2 0 00-2-2zm14 3h-9v-2h9v2zm-9-5a4 4 0 01-3.874-3H2V7h7.126A4 4 0 1113 12zm0-6a2 2 0 102 2.09v.4V8a2 2 0 00-2-2zm9 3h-4V7h4v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSlider01;
