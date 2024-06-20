import { FC, SVGProps } from "react";

interface ArrowProps extends SVGProps<SVGSVGElement> {
  active: boolean;
  orientation: "left" | "right";
}

const Arrow: FC<ArrowProps> = ({ active, orientation, ...props }) => {
  return orientation === "left" ? (
    <svg
      width="17"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24.39a1.078 1.078 0 0 0-1.523.06L1.234 4.224a1.078 1.078 0 0 0 0 1.463l3.483 3.772A1.078 1.078 0 1 0 6.3 7.996L4.488 6.032h10.473a1.078 1.078 0 1 0 0-2.156H4.488l1.813-1.963A1.078 1.078 0 0 0 6.24.39Z"
        fill={active ? "#23262F" : "#929292"}
      />
    </svg>
  ) : (
    <svg width="17" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.76.39a1.078 1.078 0 0 1 1.524.06l3.482 3.773c.381.413.381 1.05 0 1.463l-3.482 3.772a1.078 1.078 0 0 1-1.585-1.462l1.813-1.964H2.039a1.078 1.078 0 0 1 0-2.156h10.473l-1.813-1.963A1.078 1.078 0 0 1 10.76.39Z"
        fill={active ? "#23262F" : "#929292"}
      />
    </svg>
  );
};

export default Arrow;
