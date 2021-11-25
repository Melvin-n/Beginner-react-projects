import React from "react";
import ReactDOM from "react-dom";
import Quote from './index'

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
          <h1>Welcome to my Quote Generator App</h1>
          <div class="text-muted" id="quote-box">
            <Quote />
          </div>
        </>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("root"));
