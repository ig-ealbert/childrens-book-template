"use client";

import React from "react";
// Simply change the path here to change which book to read
import { pages } from "../stories/bobos-big-adventure/pages";
// For example
// import { pages } from "../stories/bobo-learns-to-share/pages";
// import { pages } from "../stories/bobo-and-the-new-girl/pages";

export default function Home() {
  const [pageNumber, updatePageNumber] = React.useState(0);

  function handlePageTurn(delta: number) {
    updatePageNumber(pageNumber + delta);
  }

  function handlePageDecrement() {
    handlePageTurn(-1);
  }

  function handlePageIncrement() {
    handlePageTurn(1);
  }

  return (
    <div className="Book">
      <div className="HorizontalStackPanel">
        <div className="Pager">
          <button onClick={handlePageDecrement} disabled={pageNumber === 0}>
            &lt;
          </button>
        </div>
        <div className="MainContent">
          <div id="picture">
            <img
              src={pages[pageNumber].image}
              title={`Image for page ${pageNumber + 1}`}
              alt={`Art for page ${pageNumber + 1}`}
            />
          </div>
          <div id="description">
            <p>{pages[pageNumber].text}</p>
          </div>
        </div>
        <div className="Pager">
          <button
            onClick={handlePageIncrement}
            disabled={pageNumber === pages.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
