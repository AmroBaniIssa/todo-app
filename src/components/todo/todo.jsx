import React, { useEffect, useState ,useContext } from "react";
import useForm from "../../hooks/form";

import { v4 as uuid } from "uuid";
import { SettingsContext } from "../../Context/settings.jsx";
import { ThemeContext } from "../../Context/theme";

const ToDo = () => {
  const  Mode  = useContext(ThemeContext);
  const settings = useContext(SettingsContext);
  const itemsPerPage = settings.numberOfItems; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    displayedItems = list.slice(
      (newPage - 1) * itemsPerPage,
      newPage * itemsPerPage
    );
  };
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  let displayedItems = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (settings.completed == true) {
    displayedItems = list
      .filter((item) => !item.complete)
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }
  // setList(displayedItems);

  // console.log(displayedItems);

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit} className={Mode.mode}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {displayedItems.map((item) => (
        <div key={item.id} className={Mode.mode}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <button onClick={() => deleteItem(item.id)}>delete: {}</button>

          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
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
            currentPage === Math.ceil(list.length / itemsPerPage)
          }
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default ToDo;
