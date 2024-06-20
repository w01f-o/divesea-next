import { FC, SVGProps } from "react";

interface InProps extends SVGProps<SVGSVGElement> {}

const In: FC<InProps> = ({ ...props }) => {
  return (
    <svg
      width="22"
      height="21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.633 12.481v7.88h-4.601v-7.362c0-1.84-.633-3.106-2.3-3.106-1.266 0-2.013.863-2.358 1.668-.116.288-.173.69-.173 1.093v7.706H7.6s.058-12.48 0-13.745h4.601V8.57s0 .058-.058.058h.058V8.57c.633-.92 1.668-2.3 4.14-2.3 2.991 0 5.292 2.013 5.292 6.211ZM2.883.001C1.331.001.295 1.036.295 2.36c0 1.323.978 2.358 2.531 2.358h.057c1.61 0 2.589-1.035 2.589-2.358C5.414 1.036 4.436.001 2.883.001ZM.526 20.361H5.07V6.614H.526V20.36Z"
        fill="#535353"
      />
    </svg>
  );
};

export default In;
