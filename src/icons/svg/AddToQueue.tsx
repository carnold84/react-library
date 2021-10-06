import * as React from "react";

function SvgAddToQueue(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 22H4a2 2 0 01-2-2V8h2v12h12v2zm4-4H8a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2zM8 4v12h12V4H8zm7 10h-2v-3h-3V9h3V6h2v3h3v2h-3v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgAddToQueue;
