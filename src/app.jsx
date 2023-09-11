import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ToDo from "./components/todo/todo.jsx";
import SettingPage from "./components/SittingPage/SettingPage.jsx";
import Settings from "./Context/settings.jsx";
import Theme from "./Context/theme.jsx";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Login from "./components/auth/login.jsx";
import LoginProvider from "./components/auth/context.jsx";
import Auth from "./components/auth/auth.jsx";

class App extends Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <Auth action="read">
          <div>
            <h2>list of items</h2>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ul>
          </div>
        </Auth>
        <Auth action="update">
          <button>update</button>
        </Auth>
        <Auth action="create">
          <button>create</button>
        </Auth>
        <Auth action="delete">
          <button>delete</button>
        </Auth>
        <Settings>
          <Theme>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<ToDo />} />
                <Route path="/settings" element={<SettingPage />} />
              </Routes>
            </BrowserRouter>
          </Theme>
        </Settings>
      </LoginProvider>
    );
  }
}

export default App;
