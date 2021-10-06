import * as React from "react";

function SvgNotificationDeactivated(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm7.585-.1l-2.9-2.9H4v-2l2-1v-5.5c-.003-.671.058-1.34.182-2L2.615 4.929 4.03 3.515 21 20.487 19.585 21.9zM18 14.659L8.28 4.938A4.946 4.946 0 0110 4.18V2h4v2.18c2.58.613 4 2.858 4 6.32v4.16-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationDeactivated;