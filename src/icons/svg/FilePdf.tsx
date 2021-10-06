import * as React from "react";

function SvgFilePdf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7a.104.104 0 01.027 0h.006a.15.15 0 00.029.006c.088.006.175.023.259.051H13.363a.421.421 0 01.052.043.988.988 0 01.293.2l6 6a.987.987 0 01.2.293.735.735 0 01.023.066l.01.028c.028.083.044.17.049.258a.1.1 0 00.007.029v.006A.112.112 0 0120 9v11a2 2 0 01-2 2zm-3.576-8v5h.94v-2.04h1.46v-.838h-1.46v-1.281H17V14h-2.576zm-3.7 0v5h1.206c.506.025.996-.181 1.332-.56a2.3 2.3 0 00.486-1.549v-.81a2.287 2.287 0 00-.5-1.526c-.325-.37-.8-.574-1.293-.555h-1.231zM7 14v5h.94v-1.759h.626c.418.023.826-.132 1.124-.426.284-.318.431-.734.41-1.16a1.725 1.725 0 00-.412-1.194A1.4 1.4 0 008.585 14H7zm6-10v5h5l-5-5zm-1.054 14.162h-.282v-3.321h.342a.716.716 0 01.62.292c.147.303.21.64.182.976v.869c.022.32-.047.64-.2.921a.765.765 0 01-.662.263zM8.585 16.4h-.646v-1.559h.655a.475.475 0 01.4.227c.108.179.16.385.15.594a.89.89 0 01-.147.55.5.5 0 01-.412.188z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFilePdf;