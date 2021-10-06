import * as React from "react";

function SvgCreditCardAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2zM4 6v12h16V6H4zm11.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-4 0a2.5 2.5 0 010-5c.543 0 1.07.18 1.5.512a2.476 2.476 0 000 3.975c-.43.332-.957.512-1.5.513z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCreditCardAlt;
