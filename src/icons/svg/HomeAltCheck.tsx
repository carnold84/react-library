import * as React from "react";

function SvgHomeAltCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a1 1 0 01-1-1v-9.643a1.01 1.01 0 01.293-.65l7-7a1 1 0 011.415 0l7 7a.994.994 0 01.292.707V21a1 1 0 01-1 1zM12 5.828l-6 6V20h12v-8.172l-6-6zm-1.5 12.731l-2.706-2.7L9.2 14.441l1.3 1.292 4.3-4.292 1.412 1.416-5.712 5.701v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeAltCheck;
