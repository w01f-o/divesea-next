import { FC, SVGProps } from "react";

interface SearchProps extends SVGProps<SVGSVGElement> {}

const Search: FC<SearchProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.95 17.73A8.365 8.365 0 1 0 9.95 1a8.365 8.365 0 0 0 0 16.73ZM15.925 15.34l7.17 7.17"
        stroke="#9D9D9D"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default Search;
