import * as React from "react";

function SvgShrink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.992 20H9v-5H4v-2h7l-.008 7zM20 11h-7l.007-7H15v5h5v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgShrink;
