import React from 'react'

export default function KitContents() {

    const drumPads = [
        {
            buttonName: 'Q',
            audioSource: './notes/a3.mp3',
            keycode: 81
        },
        {
            buttonName: 'W',
            audioSource: './notes/b3.mp3',
            keycode: 87
        },
        {
            buttonName: 'E',
            audioSource: './notes/c3.mp3',
            keycode: 69
        },
        {
            buttonName: 'A',
            audioSource: './notes/d3.mp3',
            keycode: 65
        },
        {
            buttonName: 'S',
            audioSource: './notes/e3.mp3',
            keycode: 83
        },
        {
            buttonName: 'D',
            audioSource: './notes/f3.mp3',
            keycode: 68
        },
        {
            buttonName: 'Z',
            audioSource: './notes/g3.mp3',
            keycode: 90
        },
        {
            buttonName: 'X',
            audioSource: './notes/g3.mp3',
            keycode: 88
        },
        {
            buttonName: 'C',
            audioSource: './notes/g3.mp3',
            keycode: 67
        }
    ]

    return (
        <div id='main-contents'>
            <div id='display'>sound</div>
            <div id='button-container'>

                {/* mapping through an array to programically create buttons */}
                {drumPads.map((drum) => (
                    <button id={drum.buttonName} className='drum-pad'> 
                    <audio> <source src={drum.audioSource} /></audio>
                    {drum.buttonName}
                    </button>
                ))}
                
            </div>
            
        </div>
    )
}
