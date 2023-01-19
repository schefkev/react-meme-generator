/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

const headerStyle = css`
  height: 65px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
`;

const imgStyle = css`
  height: 80%;
  margin-left: 10%;
`;

const paraStyle = css`
  font-family: VT323, monospace;
  font-size: 50px;
  margin-left: 60px;
  color: whitesmoke;
`;

export default function Header() {
  return (
    <div>
      <header css={headerStyle}>
        <img
          css={imgStyle}
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Troll Face"
        />
        <p css={paraStyle}>Meme Generator</p>
      </header>
    </div>
  );
}
