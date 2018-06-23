import React from "react";
import "../styles/Drumpad.css";

const Drumpad = ({ power, press, sound }) => {
  const handleClick = e => {
    const audio = e.target.querySelector("audio");
    if (power) audio.play();
  };

  return (
    <div className="drumpad" onClick={handleClick}>
      <audio src={sound} type="audio/wav" id={`drumpad-${press}`} />
      {press}
    </div>
  );
};

export default Drumpad;
