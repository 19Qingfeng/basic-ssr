import React from 'react';
import App from '../src/App';
import HTML from '../src/html';
import { renderToString } from 'react-dom/server';

function getComments() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export default async function render(res) {
  const comments = await getComments();

  res.send(
    renderToString(
      <HTML comments={comments}>
        <App comments={comments} />
      </HTML>
    )
  );
}
