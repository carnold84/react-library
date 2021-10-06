import * as React from "react";

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20H4a2 2 0 01-2-2V5.913A2 2 0 014 4h16a2 2 0 012 2v12a2 2 0 01-2 2zM4 7.868V18h16V7.868L12 13.2 4 7.868zM4.8 6l7.2 4.8L19.2 6H4.8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMail;
