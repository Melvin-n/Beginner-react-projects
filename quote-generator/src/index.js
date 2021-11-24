import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      authors: [],
      number: Math.floor(Math.random() * 1644)
    };
  }

  handleClick = () => {
    this.setState({
      number: Math.floor(Math.random() * 1644)
    })
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          this.setState({
            isLoaded: true,
            quotes: res.map((item) => item.text),
            authors: res.map((item) => item.author),
            number: Math.floor(Math.random() * 1644)
          });
        },
        (err) => {
          this.setState({
            isLoaded: true,
            err,
          });
        }
      );
  }

  render() {
    {
      console.log(this.state.quotes[6]);
      console.log(this.state.authors[6]);
    }
    
    return (    
      <div id='quotebox'>
        <h4 id="text">{this.state.quotes[this.state.number]}</h4>
        <h5 id="author"> {this.state.authors[this.state.number]}</h5>
        <section>
          <button onClick={this.handleClick}>New Quote</button>
          <button>Tweet Quote</button>
        </section>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));
