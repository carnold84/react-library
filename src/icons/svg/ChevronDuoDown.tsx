import * as React from "react";

function SvgChevronDuoDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 18.424l-6.01-6.01 1.414-1.415 4.6 4.6 4.6-4.6 1.406 1.415-6.009 6.01H12zM12 13L5.99 6.989l1.414-1.414 4.6 4.6 4.6-4.6 1.406 1.414-6.009 6.01L12 13z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronDuoDown;
