import * as React from "react";

function SvgCheckAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.647 18.01l-4.95-4.949 1.413-1.415 3.537 3.537 8.485-8.486 1.414 1.414-9.9 9.9.001-.001zm-4.243 0l-4.95-4.949 1.414-1.415 4.95 4.95-1.413 1.414zm4.243-4.242l-1.415-1.414 6.364-6.364 1.415 1.414-6.364 6.363v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckAll;
