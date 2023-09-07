// import React, { useState } from "react";

// export const AddToListContext = React.createContext();

// export default function AddList(props) {
//   const [list, setlist] = useState([]);
//   const [completed, setIncompleted] = useState([]);

//   const updateList = (newItems) => {
//     setlist((prevList) => [...prevList, newItems]);
//     console.log("newList", list);

//     console.log("newList", list);
//   };

//   const updatecompleted = (newIncomplete) => {
//     setIncompleted(newIncomplete);
//     console.log("newCompleted", completed);
//   };
//   const addOneincompleted = (newIncomplete) => {
//     setlist((prevList) => [...prevList, newIncomplete]);
//     console.log("newList", list);
//   };

//   const deleteOneItem = (newIncomplete) => {
//     let newarray = list.filter((item) => item.id !== newIncomplete);
//     setlist(newarray);
//   };

//   function toggleComplete(id) {
//     console.log(list);
//     const items = list.map((item) => {
//       if (item.id == id) {
//         item.completed = !item.completed;
//       }
//       return item;
//     });
//     setlist(items);
//   }

//   const state = {
//     list: list,
//     completed: completed,
//     updateList,
//     updatecompleted,
//     addOneincompleted,
//     deleteOneItem,
//     toggleComplete,
//   };

//   return (
//     <AddToListContext.Provider value={state}>
//       {props.children}
//     </AddToListContext.Provider>
//   );
// }
