import React from "react";
import "../styles/Drumpad.css";

const Drumpad = ({ power, setDisplay, press, sound }) => {
  const handleClick = e => {
    const audio = e.target.querySelector("audio");
    setDisplay(e);
    if (power) audio.play();
  };

  return (
    <div
      className="drumpad drum-pad"
      id={`drum-pad${press}`}
      onClick={handleClick}
    >
      <audio src={sound} type="audio/wav" id={`${press}`} className="clip" />
      {press}
    </div>
  );
};

export default Drumpad;
