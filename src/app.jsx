import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ToDo from "./components/todo/todo.jsx";
import SettingPage from "./components/SittingPage/SettingPage.jsx";
import AddList from "./Context/addToList.jsx";
import Settings from "./Context/settings.jsx";
import Theme from "./Context/theme.jsx";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";

class App extends Component {
  // render() {
  //   return (
  //     <BrowserRouter>
  //       {/* <Theme>
  //         <Settings> */}
  //           <Routes>
  //             <Route path="/" element={<ToDo />} />
  //             <Route path="/settings" element={<SettingPage />} />
  //           </Routes>
  //         {/* </Settings>
  //       </Theme> */}
  //     </BrowserRouter>
  //   );
  // }
  render() {
    return (
      <>
        <Theme>
          <Settings>
            <AddList> 
              <ToDo />
            </AddList>
          </Settings>
        </Theme>
      </>
    );
  }
}

export default App;
