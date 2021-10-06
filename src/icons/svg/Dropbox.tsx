import * as React from "react";

function SvgDropbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.006 20.5L7 17.311l5-3.186 5 3.186-5 3.188.006.001zm5-4.251l-5-3.187 5-3.187-5-3.186 5-3.189 5 3.189-5 3.186 5 3.187-5 3.187zM7 16.249l-5-3.187 5-3.187-5-3.186L7 3.5l5 3.189-5 3.185 5 3.187-5 3.188z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDropbox;
