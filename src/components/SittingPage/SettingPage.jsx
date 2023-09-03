import React, { useContext, useState } from "react";
import { SettingsContext } from "../../Context/settings";
import { ThemeContext } from "../../Context/theme";
import { Code, Label, Switch } from "@blueprintjs/core";

export default function SettingPage(props) {
  const site = useContext(SettingsContext);
  const theme = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    site.updateNumberOfItems(e.target.myNumber.value);
    site.updateCompleted(isOn); // Update based on the state of the toggle switch

    e.target.reset();
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Manage Settings</h2>
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
          <p>{isOn ? "ON" : "OFF"}</p>
        </div>
        <label htmlFor="myInput">Number of items per page</label>
        <input type="number" name="myNumber" />

        <input type="submit" />
      </form>
      <h2>Current Mode: {theme.mode}</h2>
    </>
  );
}
