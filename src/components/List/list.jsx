import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

import { AddToListContext } from "../../Context/addToList.jsx";
import { SettingsContext } from "../../Context/settings.jsx";

const Pagination = () => {
  const Additem = useContext(AddToListContext);
  const settings = useContext(SettingsContext);

  const itemsPerPage = settings.numberOfItems; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Sample list of items
  let itemList = Additem.list;
  console.log(settings.completed);
  if (settings.completed == false) {
    const pending = itemList.filter((item) => !item.completed);
    itemList = pending;
  } else {
    itemList = Additem.list;
  }
  // Calculate the index range for items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the itemList based on the current page
  const displayedItems = itemList.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function deleteItem(id) {
    return Additem.updateList(Additem.list.filter((item) => item.id !== id));
   
  }

  function toggleComplete(id) {
    const items = Additem.list.map((item) => {
      if (item.id == id) {
        item.completed = true;
        deleteItem(item.id);
        Additem.updatecompleted({
          id: item.id,
          addToDoItem: item.addToDoItem,
          difficulty: item.difficulty,
          assignedTo: item.assignedTo,
        });
      }
      return item;
    });
  }

  // useEffect(() => {
  //   // Filter items into pending and completed arrays
  //   const pending = itemList.filter((item) => !item.completed);
  //   const completed = itemList.filter((item) => item.completed);

  //   setPendingItems(pending);
  //   setCompletedItems(completed);
  // }, [itemList]);


  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <>
            <Card interactive={true} elevation={Elevation.TWO} key={item.id}>
              <h5>
                <a href="#">{item.addToDoItem}</a>
              </h5>
              <li>task id:{item.id}</li>
              <li>difficulty:{item.difficulty}</li>
              <li>assignedTo:{item.assignedTo}</li>
              <li key={index}>
                completed:{item.completed ? "done" : "pending"}
              </li>
              {/* <p>Card content</p> */}
              <Button onClick={() => toggleComplete(item.id)}>completed</Button>
            </Card>
          </>
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

export default Pagination;
