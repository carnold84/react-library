import * as React from "react";

function SvgMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.248 16.997A10.76 10.76 0 0118 17C11.925 17 7 12.075 7 6c0-.083 0-.166.003-.248a8 8 0 1011.245 11.245zm1.218-2.116A9 9 0 019.822 2.238 9.999 9.999 0 002 12c0 5.523 4.477 10 10 10a10 10 0 009.762-7.822c-.72.332-1.49.571-2.296.703z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMoon;
