import * as React from "react";

function SvgFlagFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.66 4.3a1 1 0 00-.98-.8H5.5a1 1 0 00-1 1v15a1 1 0 102 0v-6h5.6l.24 1.2c.09.468.503.805.98.8h5.18a1 1 0 001-1v-8a1 1 0 00-1-1h-4.6l-.24-1.2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFlagFill;
