import * as React from "react";

function SvgChevronDuoRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.414 18.01l-1.415-1.413 4.6-4.6-4.6-4.6 1.415-1.407 6.01 6.01-6.009 6.01h-.001zm-5.425 0l-1.414-1.413 4.6-4.6-4.6-4.593L6.989 5.99 13 12l-6.01 6.01h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgChevronDuoRight;
