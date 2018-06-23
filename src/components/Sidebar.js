import React from "react";

const Sidebar = props => (
  <div className="sidebar">
    <label htmlFor="power">Power</label>
    <input
      checked={props.checked}
      onChange={props.handlePowerToggle}
      type="checkbox"
      id="power"
      name="power"
    />
    <p>{props.noise}</p>
  </div>
);

export default Sidebar;
