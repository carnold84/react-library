import * as React from "react";

function SvgListUl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 18H8v-2h12v2zM6 18H4v-2h2v2zm14-5H8v-2h12v2zM6 13H4v-2h2v2zm14-5H8.023V6H20v2zM6 8H4V6h2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgListUl;
