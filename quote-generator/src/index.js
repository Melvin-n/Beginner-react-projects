import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactCSSTransitionGroup from 'react-transition-group'; 

const colors = ['#ffce3b', '#ffc0cb', '#2e4045', '#5e3c58','#393939','#ec5064', 'dda060', '9ffeff', '674ea7', '#4b806e', '#f7e1d3' ]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorNumber: Math.floor(Math.random() * 10)
    }
  }

  randomColor = () => {
    this.setState({
      colorNumber: Math.floor(Math.random() * 10)
    })
  }

  

  render() {
    return (
      <div id='container' style={{backgroundColor: colors[this.state.colorNumber]}}>
        <h1 id='title'>Daily Quote</h1>
        <div class="text-muted" id="quote-box">
          <Quote colorNumber={this.state.colorNumber} randomColor={this.randomColor}/>
        </div>
      </div>
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
      number: Math.floor(Math.random() * 1644),
      
    };
  }

  

  handleClick = () => {
    console.log(this.props)
    this.props.randomColor()
    this.setState({
      number: Math.floor(Math.random() * 300),
      colorNumber: Math.floor(Math.random() * 10)
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
            number: Math.floor(Math.random() * 300)
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
          <button style={{backgroundColor: colors[this.props.colorNumber]}} className='btn'  onClick={this.handleClick}>New Quote</button>
          <a href={`https://twitter.com/intent/tweet?text=${this.state.quotes[this.state.number]}
           - ${!this.state.authors[this.state.number] ? 'Unknown' : this.state.authors[this.state.number]}`}>
          <button style={{backgroundColor: colors[this.props.colorNumber]}} className='btn' id='tweet-btn'> 
          <i className="fab fa-twitter"></i> </button></a>
        </section>
      </div>
    );
  }}




ReactDOM.render(<App />, document.getElementById("root"));
