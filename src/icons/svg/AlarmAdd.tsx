import * as React from "react";

function SvgAlarmAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a9.121 9.121 0 01-9-9 9.121 9.121 0 019-9 9.121 9.121 0 019 9 9.121 9.121 0 01-9 9zm0-16a7.094 7.094 0 00-7 7 7.094 7.094 0 007 7 7.094 7.094 0 007-7 7.094 7.094 0 00-7-7zm1 12h-2v-4H7v-2h4V8h2v4h4v2h-4v4zm7.292-11.292l-3.009-3 1.409-1.417 3.01 3-1.41 1.416v.001zm-16.583 0L2.292 5.291l2.991-3 1.415 1.416-2.989 3v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgAlarmAdd;
