import * as React from "react";

function SvgCss3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.983 20.989l-6.37-1.813L4.193 3.143h15.615l-1.42 16.034-6.4 1.812h-.004zm-4.261-7.637l.216 2.867L12 17.483l3.99-1.14.906-9.923h-9.8l.158 1.949h7.529l-.186 2.024H9.66l.178 1.912h4.6l-.272 2.62-2.164.6-2.2-.6-.14-1.57h-1.94v-.003z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCss3;
