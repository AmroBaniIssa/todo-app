import React from "react";

import ToDo from "./components/todo/todo.jsx";
import Settings from "./Context/settings.jsx";
import Theme from "./Context/theme.jsx";
import AddList from "./Context/addToList.jsx"; // Corrected component name
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";

export default class App extends React.Component {
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
