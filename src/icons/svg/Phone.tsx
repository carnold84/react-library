import * as React from "react";

function SvgPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.997 20C10.466 20.012 3.991 13.46 4 5.003 4 4.45 4.448 4 5 4h2.64c.495 0 .916.364.989.854a12.417 12.417 0 001.015 3.397l.103.222a.707.707 0 01-.23.872c-.818.584-1.13 1.759-.493 2.675.799 1.15 1.806 2.158 2.956 2.957.917.636 2.092.324 2.675-.493a.707.707 0 01.873-.231l.221.102c1.078.5 2.222.842 3.397 1.016.49.073.854.494.854.99V19a1 1 0 01-1.001 1h-.002z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPhone;
