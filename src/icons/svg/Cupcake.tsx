import * as React from "react";

function SvgCupcake(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.238 14.902a3.001 3.001 0 01-.795-5.467c.328-.2.557-.551.557-.935a5.5 5.5 0 018.559-4.572c.371.25.855.275 1.287.158A2.503 2.503 0 0118 6.5c0 .338.197.667.51.795a4.001 4.001 0 01.294 7.276l-.694 5.553a1 1 0 01-.993.876H6.883a1 1 0 01-.992-.876l-.653-5.222zM7 8.5c0 1.19-.69 2.14-1.518 2.644A1 1 0 006 13h11a2 2 0 00.754-3.853C16.6 8.676 16 7.55 16 6.5a.5.5 0 00-.632-.483c-.81.22-1.935.235-2.923-.428A3.5 3.5 0 007 8.5zm.266 6.5l.5 4H9v-4H7.266zM13 19v-4h-2v4h2zm2 0h1.234l.5-4H15v4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCupcake;
