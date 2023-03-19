import React, { useState, useRef } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

import audioFile from '../assests/coverpiano1.mp3';
import '../styles/music.css'

function MusicPlayer() {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    function togglePlaying() {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    }

    return (
        <div className='px-4 py-5 my-5 text-center music'>
            <button className='play' onClick={togglePlaying}>
                {playing ? <FaMicrophone />  : <FaMicrophoneSlash />}
            </button>
            <audio ref={audioRef}>
                <source src={audioFile} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default MusicPlayer;
