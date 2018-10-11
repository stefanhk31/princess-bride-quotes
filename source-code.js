import React, { Component } from 'react';
import logo from './logo.svg';
import './quotes.scss';

class RandomQuoteMachine extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(event) {
    this.setState({
      randomIndex: Math.floor(Math.random() * 20),
      });
  }

  render() {
    const quotes = [
      {quote: "As you wish.", author: "Westley"},
      {quote: "This is true love. You think this happens every day?", author: "Westley"},
      {quote: "Death cannot stop true love. All it can do is delay it for a little while.", author: "Westley"},
      {quote: "Inconceivable!", author: "Vizzini"},
      {quote: "He's moving awfully fast. I wonder if he's using the same wind as us.", author: "Inigo Montoya"},
      {quote: "You keep using that word. I do not think it means what you think it means.", author: "Inigo Montoya"},
      {quote: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.", author: "Inigo Montoya"},
      {quote: "You've been mostly dead all day.", author: "Fezzik"},
      {quote: "I think everything is a trap. That's why I'm still alive.", author: "Prince Humperdinck"},
      {quote: "Oh, you mean *this* gate key.", author: "Yellin"},
      {quote: "Never go in against a Sicilian when death is on the line!", author: "Vizzini"},
      {quote: "Plato, Aristotle, Socrates? Morons!", author: "Vizzini"},
      {quote: "Life is pain. Anyone who says differently is selling something.", author: "Man in Black"},
      {quote: "Rodents of Unusual Size? I don't think they exist.", author: "Westley"},
      {quote: "I'm not a witch, I'm your wife!", author: "Valerie"},
      {quote: "Have fun storming the castle!", author: "Miracle Max"},
      {quote: "Mawwage, that bwessed awwangement, that dweam wifin a dweam.", author: "Impressive Clergyman"},
      {quote: "Yes you're very smart, now shut up.", author: "Grandpa"},
      {quote: "I've just sucked one year of your life away...how do you feel?", author: "Count Rugen"},
      {quote: "I died that day. And you can die too, for all I care.", author: "Buttercup"}
  ];   
const newQuote = quotes[this.state.randomIndex];
  
    return (
      <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
        <span id="text"><i className="fa fa-quote-left"></i>{newQuote.quote}</span>
        </div>
        <div className="quote-author">
          <span id="author">-{newQuote.author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" href="https://twitter.com/intent/tweet" title="Tweet this quote!" target="_blank">        
            <i className="fa fa-twitter"></i></a>
          <button className="button" id="new-quote" onClick={this.handleClick}>New quote</button>
        </div>
      </div>
      <div className="footer"> <em>by <a href="https://github.com/stefanhk31">stefanhk31</a></em></div>
    </div>
    );
  }
}

export default RandomQuoteMachine;
