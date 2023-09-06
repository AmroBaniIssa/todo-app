import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function Settings(props) {
  const [numberOfItems, setNumberOfItems] = useState("2");
  const [completed, setcompleted] = useState(false);

  const updateNumberOfItems = (newNumberOfItems) => {
      setNumberOfItems(newNumberOfItems||2);
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
