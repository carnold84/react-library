import * as React from "react";

function SvgCreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2zM4 12v6h16v-6H4zm0-6v2h16V6H4zm9 10H6v-2h7v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCreditCard;
