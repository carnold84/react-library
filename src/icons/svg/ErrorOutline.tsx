import * as React from "react";

function SvgErrorOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.99 22C6.468 21.994 1.996 17.515 2 11.993 2.004 6.472 6.482 1.998 12.003 2 17.525 2.002 22 6.478 22 12c-.003 5.525-4.485 10.002-10.01 10zM4 12.172A8 8 0 104 12v.172zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgErrorOutline;
