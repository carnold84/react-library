import * as React from "react";

function SvgSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.998 22h-2v-3h2v3zm5.364-2.222l-2.121-2.121 1.414-1.414 2.122 2.122-1.413 1.413h-.002zm-12.728 0L4.22 18.364l2.12-2.122 1.415 1.414-2.12 2.121v.001zm6.364-2.771a5.007 5.007 0 11.004-10.014 5.007 5.007 0 01-.004 10.014zm0-8.014a3.007 3.007 0 10.004 6.014 3.007 3.007 0 00-.004-6.014zm10 4.007h-3v-2h3v2zm-17 0h-3v-2h3v2zm12.656-5.242l-1.413-1.415 2.121-2.122 1.415 1.415-2.122 2.121-.001.001zm-11.313 0l-2.12-2.121 1.415-1.414 2.12 2.122-1.414 1.412v.001zM12.998 5h-2V2h2v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSun;