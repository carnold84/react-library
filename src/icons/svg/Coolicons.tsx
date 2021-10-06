import * as React from "react";

function SvgCoolicons(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.286 17.714c-1.64 0-3.2-.705-4.286-1.934a5.714 5.714 0 11-1.7-8.875 7.812 7.812 0 00-1.427 2.481 2.857 2.857 0 101.7 2.612 5.714 5.714 0 115.714 5.714v.002zM13.43 12.1a2.857 2.857 0 100-.1v.1z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCoolicons;
