import * as React from "react";

function SvgFlagOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 20.5a1 1 0 01-1-1v-15a1 1 0 011-1h6.38a1 1 0 01.9.55l.72 1.45h5a1 1 0 011 1v8a1 1 0 01-1 1h-5.39a1 1 0 01-.89-.55l-.72-1.45h-5v6a1 1 0 01-1 1zm1-15v6h6l1 2h4v-6h-5l-1-2h-5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFlagOutline;