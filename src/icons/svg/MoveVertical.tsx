import * as React from "react";

function SvgMoveVertical(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 22l5-5h-4V7h4l-5-5-5 5h4v10H7l5 5z" fill="inherit" />
    </svg>
  );
}

export default SvgMoveVertical;
