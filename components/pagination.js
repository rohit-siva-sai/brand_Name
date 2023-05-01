import React, { useMemo } from "react";
import { usePagination ,DOTS} from "./usepagination";





const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="" >
      <ul
        className="flex items-center justify-center  mx-auto space-x-2 "
      >
        {/* Left navigation arrow */}
        <li
          
          className={`${currentPage === 1 ? "disabled:opacity-50" : "opacity-100"} flex items-center space-x-2 cursor-pointer `}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              // className={classnames("pagination-item", {
              //   selected: pageNumber === currentPage,
              // })}
              className={`cursor-pointer py-2 font-bold text-gray-700  px-4 ${pageNumber==currentPage ? "bg-gray-100" : "bg-transparent"}  hover:bg-gray-100 rounded-full  `}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          // className={classnames("pagination-item", {
          //   disabled: currentPage === lastPage,
          // })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
