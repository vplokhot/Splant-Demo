import { useEffect, useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  //   const audio = document.createElement("audio");
  //   console.log(blob, "blob");
  //   console.log(url, "url");
  //   audio.src = url;
  //   audio.controls = true;
  //   document.body.appendChild(audio);

  return (
    <div>
      <audio src={url} controls={true} />
    </div>
  );
};

export const Recorder = (props) => {
  const [isRecording, setRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setBlocked] = useState(false);
  const [blobs, setBlobs] = useState([]);

  console.log(this, "this");
  console.log(props, "props");

  useEffect(() => {
    console.log(isRecording, " isrecording");
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setBlocked(false);
      },
      () => {
        console.log("Permission Denied");
        setBlocked(true);
      }
    );
  });

  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const stop = async () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        console.log(buffer, "buffer");
        console.log(blob, "blob");
        const blobURL = URL.createObjectURL(blob);
        // addAudioElement(blob);
        setBlobURL(blobURL);
        setRecording(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={start} disabled={isRecording}>
          Record
        </button>
        <button onClick={stop} disabled={!isRecording}>
          Stop
        </button>
        <audio src={blobURL} controls="controls" />
      </header>
    </div>
  );
};
