import * as React from "react";

function SvgLayersAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 23.27l-9-7 1.62-1.26 7.37 5.73 7.38-5.739L21 16.27l-9 7zM12 19l-9-7 1.62-1.26 7.37 5.73 7.38-5.74L21 12l-9 7zm0-4.27L4.63 9 3 7.73l9-7 9 7L19.36 9 12 14.73z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLayersAlt;
