import * as React from "react";

function SvgPauseCircleFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm1-14v8h2V8h-2zM9 8v8h2V8H9z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPauseCircleFilled;
