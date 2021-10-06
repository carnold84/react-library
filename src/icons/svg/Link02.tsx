import * as React from "react";

function SvgLink02(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.465 20.535A5 5 0 014.929 12L7.05 9.878l1.414 1.414-2.121 2.121a3 3 0 104.243 4.243l2.12-2.121 1.415 1.415L12 19.071a4.969 4.969 0 01-3.536 1.464zm.707-4.293l-1.414-1.414 7.07-7.071 1.415 1.414-7.07 7.07-.001.001zm7.779-2.121l-1.415-1.414 2.12-2.121a3 3 0 10-4.241-4.243l-2.122 2.121L9.879 7.05 12 4.928a5 5 0 017.07 7.071l-2.12 2.121v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLink02;