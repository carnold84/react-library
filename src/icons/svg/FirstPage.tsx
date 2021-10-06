import * as React from "react";

function SvgFirstPage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.444 18.01L10.432 12l6.012-6.01 1.415 1.414-4.6 4.6 4.6 4.6-1.415 1.406zm-8.3-.01h-2V6h2v12z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFirstPage;
