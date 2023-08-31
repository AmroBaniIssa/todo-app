import React from "react";

import ToDo from "./components/todo/todo.jsx";
import Settings from "./Context/settings.jsx";
import Theme from "./Context/theme.jsx";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Theme>
          <Settings>
            <ToDo />
          </Settings>
        </Theme>
      </>
    );
  }
}
