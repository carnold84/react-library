import * as React from "react";

function SvgQrCode1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 11V3h8v8H3zm3-5v2h2V6H6zM13 11V3h8v8h-8zm3-5v2h2V6h-2zM3 13v8h8v-8H3zm5 3v2H6v-2h2zM16 13h-3v2h3v4h-1v-2h-2v4h4v-2h2v2h2v-3h-2v-1h-1v-1h3v-3h-3v2h-2v-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgQrCode1;
