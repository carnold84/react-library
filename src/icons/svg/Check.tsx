import * as React from "react";

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.525 17.657l-4.95-4.95 1.414-1.414 3.537 3.534-.001.001 8.485-8.485 1.414 1.414-8.485 8.486-1.413 1.413-.001.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheck;
