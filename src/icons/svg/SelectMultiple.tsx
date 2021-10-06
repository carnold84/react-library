import * as React from "react";

function SvgSelectMultiple(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 22H4a2 2 0 01-2-2V8h2v12h12v2zm4-4H8a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2zM8 4v12h12V4H8zm5 9.561L9.293 9.853l1.414-1.414L13 10.733l4.293-4.293 1.414 1.414L13 13.56v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSelectMultiple;
