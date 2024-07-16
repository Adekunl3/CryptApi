// src/components/Pagination.js

import React from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={`mx-1 px-3 py-2 ${
            currentPage === number ? "bg-blue-700" : "bg-blue-500"
          } text-white rounded-lg hover:bg-blue-600`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className="mx-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
