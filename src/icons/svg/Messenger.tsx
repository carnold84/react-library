import * as React from "react";

function SvgMessenger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.401 21v-3.189a8.1 8.1 0 01-3.31-6.479C3.09 6.738 7.09 3 12 3s8.91 3.738 8.91 8.332c.001 4.594-4 8.33-8.91 8.33a9.463 9.463 0 01-2.559-.349L6.403 21h-.002zm4.66-11.931l-4.866 5.163 4.438-2.454 2.3 2.394L17.8 9.01l-4.434 2.454-2.305-2.395z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessenger;