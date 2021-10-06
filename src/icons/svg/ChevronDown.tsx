import * as React from "react";

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 15.713l6.01-6.01-1.413-1.415-4.597 4.6-4.596-4.6L5.99 9.702 12 15.713z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronDown;
