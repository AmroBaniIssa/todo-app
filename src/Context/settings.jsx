import React, { useState, useEffect } from "react";

export const SettingsContext = React.createContext();

export default function Settings(props) {
  const [numberOfItems, setNumberOfItems] = useState(() => {
    const storedValue = localStorage.getItem("numberOfItems");
    return storedValue ? JSON.parse(storedValue) : "2";
  });

  const [completed, setCompleted] = useState(() => {
    const storedValue = localStorage.getItem("completed");
    return storedValue ? JSON.parse(storedValue) : false;
  });


  const updateNumberOfItems = (newNumberOfItems) => {
    setNumberOfItems(newNumberOfItems || 2);
    localStorage.setItem("numberOfItems", JSON.stringify(newNumberOfItems));

  };

  const updateCompleted = (newCompleted) => {
    setCompleted(newCompleted);
    localStorage.setItem("completed", JSON.stringify(newCompleted));
  };
  const state = {
    numberOfItems,
    completed,
    updateNumberOfItems,
    updateCompleted,
  };

  useEffect(() => {
  
    const storedNumberOfItems = localStorage.getItem("numberOfItems");
    const storedCompleted = localStorage.getItem("completed");

    if (storedNumberOfItems !== null) {
      setNumberOfItems(JSON.parse(storedNumberOfItems));
    }

    if (storedCompleted !== null) {
      setCompleted(JSON.parse(storedCompleted));
    }
  }, []);

  console.log(numberOfItems, completed, "//////////////////");
  //   console.log(completed);
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
