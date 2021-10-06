import * as React from "react";

function SvgNotificationOutlineDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h3a4.955 4.955 0 00-1 3c0 .251.019.502.056.751H12A3.6 3.6 0 008.875 7.2 5.692 5.692 0 008 10.5V17h8v-6.5c0-.211-.007-.414-.021-.6a5.044 5.044 0 002.006.007c.011.211.015.412.015.6V16l2 1v2zM17 8a3 3 0 110-6 3 3 0 010 6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationOutlineDot;