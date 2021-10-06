import * as React from "react";

function SvgIdCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20H4a1.943 1.943 0 01-2-1.876V5.875A1.942 1.942 0 014 4h16a1.942 1.942 0 012 1.875v12.25A1.943 1.943 0 0120 20zM4 6v11.989L20 18V6.011L4 6zm9.43 10H6a3.21 3.21 0 011.093-2.14 3.829 3.829 0 012.622-1.11c.984.02 1.923.417 2.622 1.11A3.212 3.212 0 0113.43 16zM18 15h-3v-2h3v2zm-8.285-3a1.934 1.934 0 01-2-2 1.935 1.935 0 012-2 1.935 1.935 0 012 2 1.934 1.934 0 01-2 2zM18 11h-4V9h4v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgIdCard;
