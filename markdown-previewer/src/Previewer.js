import React, { useState } from 'react'
import './previewer.css'

export default function Previewer() {
    const [preview, setPreview] = useState('')
    const handleChange = (e) => {
        setPreview(e.target.value)
    }
    return (
        <div id='previewer-container'>
            <h4> Previewer </h4>
            <textarea id='previewer-textarea' value={preview} onChange={handleChange}> </textarea>
        </div>
    )
}
