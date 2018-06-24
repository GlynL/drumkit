import React, { Component } from "react";
import Drumpad from "./Drumpad";
import "../styles/Drumkit.css";
import DrumHeader from "./DrumHeader";
import Sidebar from "./Sidebar";

const drumpads = [
  {
    press: "q",
    sound: "sounds/boom.wav"
  },
  {
    press: "w",
    sound: "sounds/clap.wav"
  },
  {
    press: "e",
    sound: "sounds/hihat.wav"
  },
  {
    press: "a",
    sound: "sounds/kick.wav"
  },
  {
    press: "s",
    sound: "sounds/openhat.wav"
  },
  {
    press: "d",
    sound: "sounds/ride.wav"
  },
  {
    press: "z",
    sound: "sounds/snare.wav"
  },
  {
    press: "x",
    sound: "sounds/tink.wav"
  },
  {
    press: "c",
    sound: "sounds/tom.wav"
  }
];

class Drumkit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumpads,
      isPowerChecked: true,
      noise: "welcome"
    };
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handlePowerChecked = this.handlePowerChecked.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  handlePowerChecked(e) {
    this.setState({ isPowerChecked: !this.state.isPowerChecked });
  }

  handleKeydown(e) {
    const audio = document.querySelector(`#${e.key}`);
    if (audio && this.state.isPowerChecked) {
      const drum = {
        ...this.state.drumpads.filter(drum => drum.press === e.key)[0]
      };
      let sound = drum.sound.replace("sounds/", "").replace(".wav", "");
      audio.play();
      this.setState({ noise: sound });
    }
  }

  setDisplay(e) {
    const audio = e.target.querySelector("audio");
    console.log(audio.id);
    const drum = {
      ...this.state.drumpads.filter(
        drum => drum.press === audio.id.toLowerCase()
      )[0]
    };
    let sound = drum.sound.replace("sounds/", "").replace(".wav", "");
    this.setState({ noise: sound });
    // }
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
