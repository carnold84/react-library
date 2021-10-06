import * as React from "react";

function SvgExpand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19H5l.007-7H7v5h5v2zm6.992-7H17V7h-5V5h7l-.008 7z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgExpand;
