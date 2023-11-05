import React from "react";

import Button from "./PaginationButton";

function Pagination(props) {
  let startPage = Math.max(props.currentPage - 2, 1);
  let endPage = Math.min(props.currentPage + 2, props.totalPages);

  if (props.currentPage <= 2) {
    endPage = Math.min(props.totalPages, 5);
  } else if (props.currentPage >= props.totalPages - 1) {
    startPage = Math.max(1, props.totalPages - 4);
  }

  const pageButtons = [];

  for (let page = startPage; page <= endPage; page++) {
    pageButtons.push(
      <Button
        key={page}
        text={page}
        check={props.currentPage === page}
        onClick={() => handlePageClick(page)}
      />
    );
  }

  const handlePageClick = (page) => {
    if (props.currentPage !== page) {
      props.handlePageClick(page);
    }
  };

  return (
    <>
      <nav className='flex items-center space-x-1.5 h-8 text-sm'>
        {props.totalPages > 5 && props.currentPage > 3 && (
          <div className='flex items-end space-x-2'>
            <Button
              text='1'
              check={props.currentPage === 1}
              onClick={() => handlePageClick(1)}
            />

            <Button
              dotsButton='left'
              check={props.currentPage === 1}
              onClick={() => handlePageClick(1)}
            />
          </div>
        )}

        {pageButtons}

        {props.totalPages > 5 && props.currentPage <= props.totalPages - 3 && (
          <div className='flex items-end space-x-2'>
            <Button
              dotsButton='right'
              check={props.currentPage === props.totalPages}
              onClick={() => handlePageClick(props.totalPages)}
            />

            <Button
              text={props.totalPages}
              check={props.currentPage === props.totalPages}
              onClick={() => handlePageClick(props.totalPages)}
            />
          </div>
        )}
      </nav>
    </>
  );
}

export default Pagination;
