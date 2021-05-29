import "./styles.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  const [quote, setQuote] = useState([]);
  const color = colors[Math.floor(Math.random() * colors.length)];

  function NewQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote([data.content, data.author]);
      });
  }

  useEffect(() => {
    NewQuote();
  }, []);

  document.body.style.backgroundColor = color;

  return (
    <div id="wrapper">
      <div id="container">
        <div id="quote-box">
          <p id="text" style={{ color: color }}>
            <q>
              <strong>{quote[0]}</strong>
            </q>
          </p>
          <h4 id="author" style={{ color: color }}>
            -{quote[1]}
          </h4>
          <div id="btns">
            <div className="tweet">
              <FontAwesomeIcon id="twitter-icon" icon={faTwitter} />
              <a
                rel="noreferrer"
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${quote}`}
                target="_blank"
                id="tweet-quote"
              >
                Tweet
              </a>
            </div>
            <button
              onClick={NewQuote}
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
        <p>
          <FontAwesomeIcon id="linkedin-icon" icon={faLinkedin} />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
          >
            Rohit Dhas
          </a>
        </p>
      </footer>
    </div>
  );
}
