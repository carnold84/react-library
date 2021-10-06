import * as React from "react";

function SvgUnsplash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21H3V10.875h5.625v5.063h6.75v-5.063H21V21zM15.375 8.063h-6.75V3h6.75V8.063z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUnsplash;
