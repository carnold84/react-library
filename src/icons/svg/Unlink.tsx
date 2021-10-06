import * as React from "react";

function SvgUnlink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.292 21.707L11.586 13H7v-2h2.586l-2-2H7a3 3 0 100 6h3v2H7a5 5 0 01-1.255-9.841L2.292 3.707l1.415-1.414 18 18-1.414 1.413v.001zm-.156-5.814l-1.428-1.427A3 3 0 0017 9h-3V7h3a5 5 0 013.137 8.893z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUnlink;
