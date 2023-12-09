import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DrumPad.css";

const DrumPad = React.memo(({ label, audioSrc, triggerKey }) => {
  const [isActive, setIsActive] = useState(false);

  const playSound = () => {
    const sound = new Audio(audioSrc);

    sound.play();
    setIsActive(true);
    setTimeout(() => setIsActive(false), 50);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === triggerKey) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const padClass = isActive ? "drum-pad clicked" : "drum-pad";

  return (
    <>
      <div className={padClass} onClick={playSound}>
        {label}
      </div>
    </>
  );
});

DrumPad.displayName = "DrumPad";

DrumPad.propTypes = {
  label: PropTypes.string,
  audioSrc: PropTypes.string,
  triggerKey: PropTypes.number,
};

export default DrumPad;
