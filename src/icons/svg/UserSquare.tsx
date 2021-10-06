import * as React from "react";

function SvgUserSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 14a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4z"
        fill="inherit"
      />
      <path
        d="M4 22a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4zM4 4v16h3a5 5 0 0110 0h3V4H4zm11 16a3 3 0 10-6 0h6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserSquare;
