import React, { useState } from 'react'
import Previewer from './Previewer'
import Markdown from './Markdown'
import './previewer.css'

export default function App() {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <h1>Markdown Previewer</h1>
            <div id='container'>
                <Previewer text={text} handleChange={handleChange} />
                <Markdown text={text} handleChange={handleChange} />
            </div>
        </>
    )
}
