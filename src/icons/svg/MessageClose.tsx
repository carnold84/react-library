import * as React from "react";

function SvgMessageClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.879 13.536L8.464 12.12 10.586 10 8.464 7.879 9.88 6.464 12 8.586l2.121-2.122 1.415 1.415L13.414 10l2.122 2.121-1.415 1.415L12 11.414l-2.121 2.122z"
        fill="inherit"
      />
      <path
        d="M3 5v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2zm2 12V5h14v10H8.334a1.984 1.984 0 00-1.2.4L5 17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessageClose;