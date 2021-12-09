import React from 'react'
import './previewer.css'
import { marked } from 'marked'


export default function Previewer(props) {

    const createMarkup = () => {
        return {__html: marked.parse(props.text, {breaks: true})}
    } 
    return (
        <div id='previewer-container'>
            <h3><b> Preview </b></h3>
            <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
    )
}
