import React from "react";

const Pagination = ({ factsPerPage, totalFacts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalFacts / factsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map((no) => (
        <a key={no} onClick={() => paginate(no)} href="#">
          {no}
        </a>
      ))}
    </nav>
  );
};

export default Pagination;
