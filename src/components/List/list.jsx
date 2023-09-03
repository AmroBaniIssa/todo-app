import React, { useState } from 'react';

const itemsPerPage = 5; // Number of items to display per page

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample list of items
  const itemList = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  // Calculate the index range for items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the itemList based on the current page
  const displayedItems = itemList.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= itemList.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;

// {list.map(item => (
//   <div key={item.id}>
//     <p>{item.text}</p>
//     <p><small>Assigned to: {item.assignee}</small></p>
//     <p><small>Difficulty: {item.difficulty}</small></p>
//     <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//     <hr />
//   </div>
// ))}