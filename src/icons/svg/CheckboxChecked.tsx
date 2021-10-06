import * as React from "react";

function SvgCheckboxChecked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 19H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2zM7 7v10h10V7H7zm4 8.362l-2.7-2.647 1.4-1.43 1.3 1.271 3.3-3.267 1.4 1.422-4.7 4.65v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCheckboxChecked;
