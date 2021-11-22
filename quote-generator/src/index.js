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
          <Buttons />
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
    };
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
    const number = Math.floor(Math.random() * 1644);
    return (
      <div>
        <h4 id="text">{this.state.quotes[number]}</h4>
        <h5 id="author">- {this.state.authors[number]}</h5>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button>New Quote</button>
        <button>Tweet Quote</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
