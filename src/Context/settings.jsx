import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function Settings(props) {
  const [numberOfItems, setNumberOfItems] = useState("3");
  const [completed, setcompleted] = useState(true);

  const updateNumberOfItems = (newNumberOfItems) => {
      setNumberOfItems(newNumberOfItems);
    };
    
    const updateCompleted = (newCompleted) => {
        setcompleted(newCompleted);
    };
    const state = {
      numberOfItems,
      completed,
      updateNumberOfItems,
      updateCompleted,
    };


//   console.log(numberOfItems);
//   console.log(completed);
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
