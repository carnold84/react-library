import * as React from "react";

function SvgRadio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19a7 7 0 117-7 7.008 7.008 0 01-7 7zm0-12a5 5 0 100 10 5 5 0 000-10z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgRadio;
