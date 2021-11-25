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
        <h1 id='title'>Quotes to live by  </h1>
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
     
    return (   
      <div> 
        <div id='quote-box'>
          <h4 id="text">“{this.state.quotes[this.state.number]}”</h4>
          <h5 id="author"> - {!this.state.authors[this.state.number] ? 'Unknown' : this.state.authors[this.state.number]}</h5>
        </div>
        <section className='button-container'>
          <button className='btn' onClick={this.handleClick}>New Quote</button>
          <button className='btn'>Tweet Quote</button>
        </section>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));
