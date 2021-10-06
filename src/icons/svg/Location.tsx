import * as React from "react";

function SvgLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21a29.776 29.776 0 01-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0111.952-4.951A6.955 6.955 0 0119 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0112 21zm0-14a3 3 0 100 6 3 3 0 000-6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLocation;
