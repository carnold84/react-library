import * as React from "react";

function SvgQrCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6h2v2H6V6z" fill="inherit" />
      <path d="M3 11V3h8v8H3zm2-6v4h4V5H5zM13 13h3v2h-3v-2z" fill="inherit" />
      <path
        d="M16 15h2v-2h3v3h-3v1h1v1h2v3h-2v-2h-2v2h-4v-4h2v2h1v-4zM18 6h-2v2h2V6z"
        fill="inherit"
      />
      <path d="M13 3v8h8V3h-8zm6 2v4h-4V5h4zM6 16h2v2H6v-2z" fill="inherit" />
      <path d="M3 21v-8h8v8H3zm2-6v4h4v-4H5z" fill="inherit" />
    </svg>
  );
}

export default SvgQrCode;
