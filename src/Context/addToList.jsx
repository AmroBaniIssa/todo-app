import React, { useState } from "react";

export const AddToListContext = React.createContext();

export default function AddList(props) {
    const [list, setlist] = useState([]);
    const [completed, setIncompleted] = useState([]);
    const state = {
      list: list,
      completed: completed,
      updateList,
      updatecompleted,
    };

  const updateList = (newItem) => {
    setlist((prevList) => [...prevList, newItem]);
    console.log("newList",list)
  };

  const updatecompleted = (newIncomplete) => {
    setIncompleted(newIncomplete);
    console.log("newCompleted",completed)

  };


  return (
    <AddToListContext.Provider value={state}>
      {props.children}
    </AddToListContext.Provider>
  );
}
