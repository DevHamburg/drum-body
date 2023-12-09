import DrumPad from "../drum-pad/DrumPad";
import "./DrumBox.css";
import drumloop from "../../assets/sounds/drumloop.mp3";
import hihat from "../../assets/sounds/hihat.mp3";
import kick from "../../assets/sounds/kick.mp3";
import music from "../../assets/sounds/music.mp3";
import punch from "../../assets/sounds/punch.mp3";
import synth from "../../assets/sounds/synth.mp3";

const DrumBox = () => {
  const padSounds = [drumloop, hihat, kick, music, punch, synth, kick, kick, kick];



  return (
    <>
      <h1>DrumBox</h1>
      <div className="drum-box">
        {padSounds.map((sound, i) => (
          <DrumPad key={i} label={`Pad ${i + i}`} audioSrc={sound} triggerKey={97 + i} />
        ))}
      </div>
    </>
  );
};

export default DrumBox;
