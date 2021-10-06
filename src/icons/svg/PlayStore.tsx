import * as React from "react";

function SvgPlayStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.4 21c-.17.003-.34-.026-.5-.086l8.054-8.057 2.666 2.669-9.255 5.2A1.998 1.998 0 015.4 21zm-1.164-.665a1.9 1.9 0 01-.236-.97V4.66a2.13 2.13 0 01.1-.658l8.233 8.235-8.1 8.1.003-.002zm12.179-5.258l-2.841-2.839 3.133-3.132 2.783 1.563c.534.24.892.755.928 1.339a1.574 1.574 0 01-.929 1.34l-3.074 1.729zm-3.461-3.463l-8.34-8.339c.229-.17.506-.26.791-.261.336.012.664.107.955.277l9.551 5.368-2.956 2.955h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPlayStore;
