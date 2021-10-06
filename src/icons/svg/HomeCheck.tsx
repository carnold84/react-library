import * as React from "react";

function SvgHomeCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 20H5a1 1 0 01-1-1v-7.86a1 1 0 01.281-.695l5.5-5.7a1 1 0 011.439 0l2.8 2.9-1.43 1.402L10.5 6.88 6 11.54v6.455h11v1A1 1 0 0116 20zm-1.712-4l-2.706-2.7L13 11.882l1.292 1.291 4.3-4.292L20 10.298l-5.712 5.7V16z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeCheck;
