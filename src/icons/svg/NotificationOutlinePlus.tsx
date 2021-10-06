import * as React from "react";

function SvgNotificationOutlinePlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h4v2.18c2.579.612 4 2.856 4 6.32V16l2 1v2zM12 5.75A3.6 3.6 0 008.875 7.2 5.692 5.692 0 008 10.5V17h8v-6.5a5.693 5.693 0 00-.875-3.3A3.6 3.6 0 0012 5.75zM13 15h-2v-2H9v-2h2V9h2v2h2v2h-2v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationOutlinePlus;
