import React from "react";
import "../styles/Sidebar.css";

const Sidebar = props => (
  <div className="sidebar">
    <p id="display">{props.noise}</p>
    <div className="switch">
      <label htmlFor="power" className="switch__label">
        Power
      </label>
      <input
        checked={props.checked}
        type="checkbox"
        id="power"
        name="power"
        className="switch__box"
      />
      <span className="switch__slider" onClick={props.handlePowerToggle} />
    </div>
  </div>
);

export default Sidebar;
