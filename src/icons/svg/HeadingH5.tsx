import * as React from "react";

function SvgHeadingH5(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zM21.745 9.92V8h-6.118l-1.142 6.09 1.846.868a2.087 2.087 0 011.59-.718c1.127 0 2.04.86 2.04 1.92s-.913 1.92-2.04 1.92c-.93 0-1.715-.587-1.96-1.39L14 17.219C14.488 18.825 16.059 20 17.922 20 20.175 20 22 18.282 22 16.16s-1.825-3.84-4.078-3.84c-.367 0-.721.045-1.058.13l.473-2.53h4.408z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeadingH5;