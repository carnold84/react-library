import * as React from "react";

function SvgImageAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 18h12a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2zm0-2V4h12v12H8z"
        fill="inherit"
      />
      <path d="M2 8h2v12h12v2H4a2 2 0 01-2-2V8z" fill="inherit" />
      <path
        d="M10 14h9l-3.75-5.444-2.25 3.11-.75-.777L10 14zM10.75 8.167c0 .644.504 1.166 1.125 1.166S13 8.811 13 8.167C13 7.522 12.496 7 11.875 7s-1.125.522-1.125 1.167z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgImageAlt;
