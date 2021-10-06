import * as React from "react";

function SvgOffOutlineClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22A10 10 0 014.926 4.926a10.004 10.004 0 1114.148 14.148A9.936 9.936 0 0112 22zm-8-9.828A8 8 0 104 12v.172zM9.409 16l-1.41-1.41L10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59 14.592 16 12 13.41 9.41 16h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgOffOutlineClose;