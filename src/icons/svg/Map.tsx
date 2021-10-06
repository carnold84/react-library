import * as React from "react";

function SvgMap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.108 22.092L2 19.721V3.613l6.892 2.3 7.031-4.021L22 4.323v16.154l-5.923-2.37-6.968 3.985h-.001zM4 6.392v11.887l4 1.333V7.72L4 6.392zm10-1.1L10 7.58v11.7l4-2.288v-11.7zm2.077-1.186L16 4.152v11.771l4 1.6V5.676l-3.923-1.57z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMap;
