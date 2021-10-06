import * as React from "react";

function SvgFilterOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 3H4a1 1 0 00-1 1v2.59c0 .523.213 1.037.583 1.407L9 13.414V21a1.001 1.001 0 001.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 00-1-1zm-6.707 9.293A.996.996 0 0013 13v5.382l-2 1V13a.996.996 0 00-.293-.707L5 6.59V5h14.001l.002 1.583-5.71 5.71z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFilterOutline;