import * as React from "react";

function SvgNotificationOutlineMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h4v2.18H14.041l.042.01C16.611 4.843 18 7.08 18 10.5V16l2 1v2zM12 5.75A3.6 3.6 0 008.875 7.2 5.692 5.692 0 008 10.5V17h8v-6.5a5.693 5.693 0 00-.875-3.3A3.6 3.6 0 0012 5.75zM15 13H9v-2h6v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationOutlineMinus;
