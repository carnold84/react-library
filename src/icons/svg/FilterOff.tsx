import * as React from "react";

function SvgFilterOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.414.414L7 1.828 8.172 3H4c-.553 0-1 .442-1 .99v2.556c0 .525.211 1.029.586 1.4L9.707 14A.984.984 0 0110 14.7v6.31c0 .735.782 1.213 1.447.884l2-.989A.988.988 0 0014 20.02V14.7c0-.262.105-.514.293-.7l2.453-2.426 2.982 2.982 1.414-1.414L8.414.414zM20.414 7.946l-.824.815L13.828 3H20c.553 0 1 .442 1 .99v2.556c0 .525-.211 1.029-.586 1.4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFilterOff;
