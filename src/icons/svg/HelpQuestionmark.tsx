import * as React from "react";

function SvgHelpQuestionmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 22h-3v-3h3v3zm0-5h-3v-.007c0-1.65 0-3.075.672-4.073a6.304 6.304 0 011.913-1.62c.334-.214.649-.417.914-.628a3.712 3.712 0 001.332-3.824A3.033 3.033 0 009 8H6a6 6 0 016-6 6.04 6.04 0 015.434 3.366 6.017 6.017 0 01-.934 6.3c-.453.502-.96.95-1.514 1.337a7.248 7.248 0 00-1.316 1.167A4.23 4.23 0 0013 17z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHelpQuestionmark;
