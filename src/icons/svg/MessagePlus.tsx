import * as React from "react";

function SvgMessagePlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H9c-.433 0-.854.14-1.2.4L3 21zM5 5v12l2.134-1.6c.346-.26.767-.401 1.2-.4H19V5H5zm8 9h-2v-3H8V9h3V6h2v3h3v2h-3v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessagePlus;