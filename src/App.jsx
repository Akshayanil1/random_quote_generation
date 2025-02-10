import { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState({
    text: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse"
  });
  const [color, setColor] = useState('#87CEEB');

  const quotes = [
    { text: "Life isn't about getting and having, it's about giving and being.", author: "Kevin Kruse"},
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill"},
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost"},
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale"},
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
    { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth"},
    { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone"},
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon"}
  ];

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#87CEEB',
  ];

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomColor = Math.floor(Math.random() * colors.length);
    
    setQuote(quotes[randomNumber]);
    setColor(colors[randomColor]);
    document.body.style.backgroundColor = colors[randomColor];
    document.body.style.color = colors[randomColor];
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
  }, []);

  const tweetQuote = () => {
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"> </i>
        <span id="text"> {quote.text}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{quote.author}</span>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" ' + quote.author)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{ backgroundColor: color }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          onClick={getRandomQuote}
          className="button"
          style={{ backgroundColor: color }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App