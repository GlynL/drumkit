import React, { Component } from "react";
import Drumpad from "./Drumpad";
import "../styles/Drumkit.css";
import DrumHeader from "./DrumHeader";
import Sidebar from "./Sidebar";

const drumpads = [
  {
    press: "Q",
    sound: "sounds/boom.wav"
  },
  {
    press: "W",
    sound: "sounds/clap.wav"
  },
  {
    press: "E",
    sound: "sounds/hihat.wav"
  },
  {
    press: "A",
    sound: "sounds/kick.wav"
  },
  {
    press: "S",
    sound: "sounds/openhat.wav"
  },
  {
    press: "D",
    sound: "sounds/ride.wav"
  },
  {
    press: "Z",
    sound: "sounds/snare.wav"
  },
  {
    press: "X",
    sound: "sounds/tink.wav"
  },
  {
    press: "C",
    sound: "sounds/tom.wav"
  }
];

class Drumkit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumpads,
      isPowerChecked: true,
      noise: "Let's start drumming!"
    };
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handlePowerChecked = this.handlePowerChecked.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  handlePowerChecked(e) {
    this.setState({ isPowerChecked: !this.state.isPowerChecked });
  }

  handleKeydown(e) {
    const key = e.key ? e.key.toUpperCase() : null;
    const audio = document.querySelector(`#${key}`);
    if (audio && this.state.isPowerChecked) {
      const drum = {
        ...this.state.drumpads.filter(drum => drum.press === key)[0]
      };
      let sound = drum.sound.replace("sounds/", "").replace(".wav", "");
      audio.play();
      this.setState({ noise: sound });
    }
  }

  setDisplay(e) {
    const audio = e.target.querySelector("audio");
    const drum = {
      ...this.state.drumpads.filter(drum => drum.press === audio.id)[0]
    };
    let sound = drum.sound.replace("sounds/", "").replace(".wav", "");
    this.setState({ noise: sound });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  render() {
    const drums = drumpads.map((drum, idx) => (
      <Drumpad
        key={idx}
        power={this.state.isPowerChecked}
        setDisplay={this.setDisplay}
        {...drum}
      />
    ));

    return (
      <div>
        <DrumHeader />
        <div className="drumkit" id="drum-machine">
          {drums}
        </div>
        <Sidebar
          checked={this.state.isPowerChecked}
          handlePowerToggle={this.handlePowerChecked}
          noise={this.state.noise}
        />
      </div>
    );
  }
}

export default Drumkit;
