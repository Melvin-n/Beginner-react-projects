import React from 'react'
import './previewer.css'

export default function Previewer(props) {
    
    return (
        <div id='previewer-container'>
            <h4> Previewer </h4>
            <textarea id='editor' value={props.text} onChange={(e) => props.handleChange(e)}> </textarea>
        </div>
    )
}
