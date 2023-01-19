import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import Header from './Header';

export default function App() {
  const [meme, setMeme] = useState('ants');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  /* To check the input value */
  const url = () => {
    /* First if checks if both variables are truthy, and if so, it returns the URL with
    all three variables */
    if (topText && bottomText) {
      return `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.jpg`;
    } else if (topText) {
      /* Second if checks if the topText variable is truthy, and if so, it returns the
    URL with the meme and topText variables */
      return `https://api.memegen.link/images/${meme}/${topText}.jpg`;
    } else if (bottomText) {
      /* Third if checks if the bottomText variable is truthy, and if so, it returns the
    URL with the meme and bottomText variables */
      return `https://api.memegen.link/images/${meme}/${bottomText}.jpg`;
    } else {
      /* Finally, the else is reached if neither topText nor bottomText is truthy, and
    it returns the URL with only the meme variable */
      return `https://api.memegen.link/images/${meme}`;
    }
  };

  /* With the saveAs function, the image will download and the name will be according to the
  strings the user has written in the input */
  const downloadImage = () => {
    saveAs(`https://api.memegen.link/images/${meme}`, 'meme');
  };

  return (
    <body>
      <header>
        {/* Importing the Header Component */}
        <Header />
      </header>
      <main>
        <img
          src={url()}
          className="meme-image"
          alt="meme"
          data-test-id="meme-image"
        />
        <section>
          {/* 1. Input to create the id */}
          <label>
            Meme template
            <input
              value={meme}
              onChange={(event) => setMeme(event.currentTarget.value)}
            />
          </label>
          {/* 2. Input to create the the Top Text String */}
          <label>
            Top text
            <input
              value={topText}
              onChange={(event) => {
                setTopText(event.currentTarget.value);
              }}
            />
          </label>
          {/* 3. Input to create the Bottom Text String */}
          <label>
            Bottom text
            <input
              value={bottomText}
              onChange={(event) => {
                setBottomText(event.currentTarget.value);
              }}
            />
          </label>
        </section>
        <button onClick={downloadImage}>Download</button>
      </main>
    </body>
  );
}
