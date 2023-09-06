import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

import { AddToListContext } from "../../Context/addToList.jsx";
import { SettingsContext } from "../../Context/settings.jsx";

const Pagination = () => {
  const Additem = useContext(AddToListContext);
  const settings = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const myKey = "myList";
  const itemsPerPage = settings.numberOfItems; // Number of items to display per page

  // let displayedItems = Additem.list? Additem.list.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // ):[];

  // if (settings.completed == true) {
  //   displayedItems = Additem.list
  //     .filter((item) => !item.completed)
  //     .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  // }

  console.log(Additem.list)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    displayedItems = Additem.list.slice(
      (newPage - 1) * itemsPerPage,
      newPage * itemsPerPage
    );
  };

  useEffect(() => {
    const newItems = [];
    const savedItems = localStorage.getItem(myKey);
    const parsedItems = JSON.parse(savedItems);
    for (let i = 0; i < parsedItems?.length; i++) {
      newItems.push(parsedItems[i]);
    }
    console.log(newItems, "############");
    // console.log(displayedItems,"/////////////")
    
    displayedItems = newItems?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
      );
      Additem.updateList(displayedItems)
    console.log(displayedItems, "************");
  }, []);

  // Save the displayed items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(myKey, JSON.stringify(displayedItems));
  }, [displayedItems]);

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
              <Button onClick={() => Additem.toggleComplete(item.id)}>
                completed
              </Button>
              <Button onClick={() => Additem.deleteOneItem(item.id)}>
                delete
              </Button>
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
          disabled={
            currentPage === Math.ceil(Additem.list.length / itemsPerPage)
          }
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
