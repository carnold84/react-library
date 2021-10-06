import * as React from "react";

function SvgListOl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.983 19H4v-1h1.989v-.5h-.994v-1h.995V16H4v-1h2.983v4zM21 18H9.069v-2H21v2zM6.983 14H4v-.9L5.79 11H4v-1h2.983v.9L5.193 13h1.79v1zM21 13H9.069v-2H21v2zM6.486 9h-.995V6H4.5V5h1.986v4zM21 8H9.069V6H21v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListOl;
