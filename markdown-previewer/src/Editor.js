import React from 'react'
import './previewer.css'

export default function Editor(props) {
    
    return (
        <div id='editor-container'>
            <h3> <b> Editor </b> </h3>
            <textarea id='editor' value={props.text} onChange={(e) => props.handleChange(e)}> </textarea>
        </div>
    )
}
