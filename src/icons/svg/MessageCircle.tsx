import * as React from "react";

function SvgMessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.051 17.828l.654.35a6.96 6.96 0 003.292.822H12a7 7 0 10-7-7v.003a6.96 6.96 0 00.822 3.292l.35.654-.538 2.417 2.417-.538zM3 21l1.058-4.762A9 9 0 0112 3a9 9 0 019 9 9 9 0 01-13.238 7.942L3 21z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessageCircle;
