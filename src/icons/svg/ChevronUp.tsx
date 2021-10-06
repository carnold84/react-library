import * as React from "react";

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 8.288l-6.01 6.01 1.414 1.415 4.6-4.6 4.6 4.6 1.407-1.415L12 8.288z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronUp;
