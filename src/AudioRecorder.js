import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  console.log(blob, "blob");
  console.log(url, "url");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

function Audio() {
  return (
    <div className="Audio">
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: false,
          echoCancellation: false,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="webm"
      />
    </div>
  );
}

export default Audio;
