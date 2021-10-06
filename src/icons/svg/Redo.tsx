import * as React from "react";

function SvgRedo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.001 4h-2v2.557a7 7 0 101.037 10.011l-1.62-1.184A5 5 0 1114.593 8h-2.59v2h6V4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgRedo;
