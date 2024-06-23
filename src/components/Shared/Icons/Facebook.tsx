import { FC, SVGProps } from "react";

interface FacebookProps extends SVGProps<SVGSVGElement> {}

const Facebook: FC<FacebookProps> = ({ ...props }) => {
  return (
    <svg
      width="11"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.953 10.67H6.972v10.668H2.526V10.67H.435V6.904h2.091V4.446c0-1.725.837-4.445 4.446-4.445h3.294v3.66H7.913c-.366 0-.941.21-.941 1.047v2.196h3.347l-.366 3.766Z"
        fill="#535353"
      />
    </svg>
  );
};

export default Facebook;
