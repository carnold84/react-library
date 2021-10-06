import * as React from "react";

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 8a5 5 0 1110 0A5 5 0 017 8zm5 3a3 3 0 100-6 3 3 0 000 6zM6.343 16.343A8 8 0 004 22h2a6 6 0 1112 0h2a8 8 0 00-13.657-5.657z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUser;
