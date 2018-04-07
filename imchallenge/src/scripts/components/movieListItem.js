import React from "react";

const movieListItem = ({ title, genre, year, rating, actors }) => (
  <div>
    <p>
      {title}({year}) - {genre} - {rating}
    </p>
    <p>{actors}</p>
  </div>
);

export default movieListItem;
