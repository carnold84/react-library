import * as React from "react";

function SvgLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21.135l-9-7 1.62-1.26 7.37 5.73 7.38-5.74 1.63 1.27-9 7zm0-4.27l-7.37-5.73L3 9.865l9-7 9 7-1.64 1.27-7.36 5.73z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLayers;
