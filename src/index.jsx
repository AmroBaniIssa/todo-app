import React from "react";
import ReactDOM from "react-dom";
import Theme from "./Context/theme.jsx";

import App from "./app.jsx";
import "./App.css";

class Main extends React.Component {
  render() {
    return (
      <Theme>
        <App />
      </Theme>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
