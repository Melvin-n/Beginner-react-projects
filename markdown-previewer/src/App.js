import React, { useState, useEffect } from 'react'
import Previewer from './Previewer'
import Editor from './Editor'
import './previewer.css'

export default function App() {
    const [text, setText] = useState('')
    useEffect(() => {
        setText(`
# Hello  
## This is my markdown previewer 
[click here for more info](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer')

\`some inline code\`
\`\`\`
and a code block !
\`\`\`
    

- And of course there are lists.
- Going downnn
- like this

> blockquotes
> on block quotes

![image](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0) \\
**The end!**
    `)
    }, [])
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div id='page'>
            <h1>Markdown Previewer</h1>
            <div id='container'>
                <Editor text={text} handleChange={handleChange} />
                <Previewer text={text} handleChange={handleChange} />
            </div>
        </div>
    )
}
