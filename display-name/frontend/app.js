import React from 'react'
import ReactDOM from 'react'


export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''

        }
    }

    render() {
        return (
            <div>
                <form action='post' id='inputForm'>
                    <input type='text' name='name' />
                    <input type='submit'>Submit</input>
                </form>

            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'))