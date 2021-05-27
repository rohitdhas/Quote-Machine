import "./styles.css";
import { useState, useEffect } from "react";

let colors = [
  "#e9c46a",
  "#e76f51",
  "#2a9d8f",
  "#457b9d",
  "#118ab2",
  "#e07a5f",
  "#8338ec"
];

export default function App() {
  
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [color, setColor] = useState('tomato');

  useEffect(()=> {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      setQuote(data.content)
      setAuthor(data.author)
    })
  }, [color])
  
  document.body.style.backgroundColor = color;

  return (
    <div id="wrapper">
      <div id="container">
        <div id="quote-box">
          <p id="text" style={{ color: color }}>
            <q><strong>{quote}</strong></q>
          </p>
          <h4 id="author" style={{ color: color }}>
            -{author}
          </h4>
          <div id="btns">
            <a rel="noreferrer" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${quote}`} target="_blank" id="tweet-quote">
              Tweet
            </a>
            <button
              onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}
              style={{ backgroundColor: color }}
              id="new-quote"
            >
              New Quote
            </button>
          </div>
        </div>
    </div>
        <footer>
          <p>Designed and Coded by</p>
          <p><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rohit-dhas-26b68215a/">Rohit Dhas</a></p>
        </footer>
  </div>
  );
}