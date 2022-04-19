import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import Arrow from 'images/arrow.inline.svg';

const Pagination = ({ currentPageIndex, pageCount, blogPageURL, categoryPath }) => {
  const pageLinkAndBreakLinkClassName =
    'flex justify-center items-center text-base w-8 h-8 rounded-full transition-colors duration-200 mx-2 hover:bg-gray-3 md:w-7 md:h-7 md:mx-0.5';
  const previousAndNextLinkClassName =
    'flex items-center text-base font-medium space-x-2 transition-colors duration-200 hover:text-primary-2';

  const handlePageChange = ({ selected }) => {
    const navigatePath =
      selected === 0
        ? `/${blogPageURL}/${categoryPath}`
        : `/${blogPageURL}/${categoryPath}${selected + 1}`;
    navigate(navigatePath);
  };

  return (
    <div className="safe-paddings pt-10">
      <div className="container-lg">
        <ReactPaginate
          containerClassName="flex justify-center items-center"
          pageLinkClassName={pageLinkAndBreakLinkClassName}
          breakLinkClassName={pageLinkAndBreakLinkClassName}
          activeLinkClassName="bg-secondary-2 font-medium text-black pointer-events-none"
          previousClassName="mr-auto"
          nextClassName="ml-auto"
          previousLinkClassName={previousAndNextLinkClassName}
          nextLinkClassName={previousAndNextLinkClassName}
          disabledClassName="text-gray-5 pointer-events-none"
          previousLabel={
            <>
              <Arrow className="text-primary-2 mt-0.5 w-2.5" />
              <span className="md:hidden">Previous</span>
            </>
          }
          nextLabel={
            <>
              <span className="md:hidden">Next</span>
              <Arrow className="text-primary-2 mt-0.5 w-2.5 rotate-180" />
            </>
          }
          forcePage={currentPageIndex}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  blogPageURL: PropTypes.string.isRequired,
  categoryPath: PropTypes.string,
};

Pagination.defaultProps = {
  categoryPath: '',
};

export default Pagination;
