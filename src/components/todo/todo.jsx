import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.jsx";

import { v4 as uuid } from "uuid";

import { AddToListContext } from "../../Context/addToList.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import SettingPage from "../SittingPage/SettingPage.jsx";
const ToDo = () => {
  const Additem = useContext(AddToListContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    Additem.updateList({
      id: uuid(),
      addToDoItem: e.target.addToDoItem.value,
      difficulty: e.target.difficulty.value,
      assignedTo: e.target.assignedTo.value,
      completed: false,
    });

    // console.log(Additem.list);

    e.target.reset();
  };

  // const getIncompleteCount = () => {
  //   return Additem.list.filter((item) => !item.complete).length;
  // };

  function deleteItem(id) {
    Additem.updateList(Additem.list.filter((item) => item.id !== id));
    // setList(items);
    // Additem.updateList(updatedList);
  }

  function toggleComplete(id) {
    const items = Additem?.list?.map((item) => {
      if (item.id == id) {
        item.completed == true;
        deleteItem(item.id);
        Additem.updatecompleted({
          id: item.id,
          addToDoItem: item.addToDoItem,
          difficulty: item.difficulty,
          assignedTo: item.assignedTo,
        });
        console.log("completet", Additem.completed);
      }
      return item;
    });
    Additem.updateList(items);
  }

  // useEffect(() => {
  //   let incompleteCount = list.filter((item) => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [list]);

  return (
    <>
      <SettingPage />
      <Header />
      <header>
        <h1>To Do List items pending</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            // onChange={handleChange}
            name="addToDoItem"
            type="text"
            placeholder="Item Details"
          />
        </label>
        <hr></hr>
        <label>
          <span>Assigned To</span>
          <input
            // onChange={handleChange}
            name="assignedTo"
            type="text"
            placeholder="Assignee Name"
          />
        </label>
        <hr></hr>

        <label>
          <span>Difficulty</span>
          <input
            defaultValue={4}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>
        <hr></hr>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      {Additem?.list?.map((item) =>
        !item.completed ? ( // Check if the task is not completed
          <div key={item.id}>
            <p>{item?.addToDoItem}</p>
            <p>
              <small>Assigned to: {item?.assignedTo}</small>
            </p>
            <p>
              <small>Difficulty: {item?.difficulty}</small>
            </p>
            <button onClick={() => toggleComplete(item.id)}>Completed</button>
            <hr />
          </div>
        ) : null // Render null for completed tasks
      )}
    
      <Footer />
    </>
  );
};

export default ToDo;
