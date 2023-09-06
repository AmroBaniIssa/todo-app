import React, { useContext, useState } from "react";
import { SettingsContext } from "../../Context/settings";
import { ThemeContext } from "../../Context/theme";
import { Code, Label, Switch } from "@blueprintjs/core";

export default function SettingPage(props) {
  const site = useContext(SettingsContext);
  const theme = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  
  site.updateCompleted(isOn);

  const submitHandler = (e) => {
    e.preventDefault();
    site.updateNumberOfItems(e.target.myNumber.value);

    e.target.reset();
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
    site.updateCompleted(isOn);
  };

  return (
    <>
        <div className="toggle-switch">
          <label className="switch">
            <h2>Show completed</h2>
            <input
              type="checkbox"
              name="checkbox"
              checked={isOn}
              onChange={toggleSwitch}
            />
            <span className="slider round"></span>
          </label>
          <p>{isOn ?"show completed tasks" :  "hide completed tasks" }</p>
        </div>
      <form onSubmit={submitHandler}>
        <h2>Manage Settings</h2>
        <label htmlFor="myInput">Number of items per page</label>
        <input type="number" name="myNumber"  />

        <input type="submit" />
      </form>
      <h2>Current Mode: {theme.mode}</h2>
    </>
  );
}
