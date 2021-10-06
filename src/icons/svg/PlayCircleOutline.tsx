import * as React from "react";

function SvgPlayCircleOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-8-9.828A8 8 0 104 12v.172zm6 4.328v-9l6 4.5-6 4.5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPlayCircleOutline;
