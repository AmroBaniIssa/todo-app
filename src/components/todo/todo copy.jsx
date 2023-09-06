// import React, { useEffect, useState, useContext } from "react";
// import useForm from "../../hooks/form.jsx";

// import { v4 as uuid } from "uuid";

// import { AddToListContext } from "../../Context/addToList.jsx";
// import Footer from "../Footer/Footer.jsx";
// import Header from "../Header/Header.jsx";
// import SettingPage from "../SittingPage/SettingPage.jsx";
// import Pagination from "../List/list.jsx";
// import Settings from "../../Context/settings.jsx";

// const ToDo = () => {
//   const Additem = useContext(AddToListContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Additem.addOneincompleted({
//       id: uuid(),
//       addToDoItem: e.target.addToDoItem.value,
//       difficulty: e.target.difficulty.value,
//       assignedTo: e.target.assignedTo.value,
//       completed: false,
//     });
//     e.target.reset();
//   };

//   return (
//     <>
//       {/* <Header /> */}

//       <form onSubmit={handleSubmit}>
//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input
//             // onChange={handleChange}
//             name="addToDoItem"
//             type="text"
//             placeholder="Item Details"
//           />
//         </label>
//         <hr></hr>
//         <label>
//           <span>Assigned To</span>
//           <input
//             // onChange={handleChange}
//             name="assignedTo"
//             type="text"
//             placeholder="Assignee Name"
//           />
//         </label>
//         <hr></hr>

//         <label>
//           <span>Difficulty</span>
//           <input
//             defaultValue={4}
//             type="range"
//             min={1}
//             max={5}
//             name="difficulty"
//           />
//         </label>
//         <hr></hr>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>
//       <Pagination />
//       <Footer />
//     </>
//   );
// };

// export default ToDo;
