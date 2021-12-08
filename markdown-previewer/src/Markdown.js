import React from 'react'
import './previewer.css'
import { marked } from 'marked'


export default function Markdown(props) {

    const createMarkup = () => {
        return {__html: marked.parse(props.text)}
    } 
    return (
        <div id='markdown-container'>
            <h4> Markdown </h4>
            <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
    )
}
