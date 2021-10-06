import * as React from "react";

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.01 18.02L2 12.01 8.01 6l1.415 1.414-4.6 4.6 4.6 4.6-1.414 1.406H8.01zm7.979 0l-1.413-1.413 4.6-4.6-4.6-4.6L15.99 6 22 12.01l-6.01 6.01h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCode;
