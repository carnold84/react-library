import * as React from "react";

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.42 20.579a1 1 0 01-.737-.326.988.988 0 01-.263-.764l.245-2.694L14.983 5.481l3.537 3.536L7.205 20.33l-2.694.245a.95.95 0 01-.091.004zM19.226 8.31L15.69 4.774l2.121-2.121a1 1 0 011.415 0l2.121 2.121a1 1 0 010 1.415l-2.12 2.12-.001.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgEdit;
