import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num + 1)}
          className={`px-3 py-1 rounded ${currentPage === num + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
