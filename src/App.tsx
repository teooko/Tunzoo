import {useEffect} from "react";
import * as Tone from 'tone';

function App() {
    let audio: Tone.Player;

    useEffect(() => {
        audio = new Tone.Player("public\\assets\\peak.mp3").toDestination();
        audio.autostart = false;
    }, []);

    const startSong = () => {
        Tone.loaded().then(() => {
            if (audio) {
                audio.start();
            } else {
                console.error("Audio player not initialized");
            }
        });
    };
    
  return (
    <>
      <div>
          <button onClick={() => startSong()}>start</button>
      </div>
    </>
  )
}

export default App
