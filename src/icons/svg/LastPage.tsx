import * as React from "react";

function SvgLastPage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.558 18.01l-1.414-1.413 4.6-4.6-4.6-4.593L7.558 5.99 13.569 12l-6.01 6.01h-.001zm10.3-.01h-2V6h2v12z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLastPage;
