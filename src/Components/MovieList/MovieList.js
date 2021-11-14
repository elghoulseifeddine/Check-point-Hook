import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ films, inputSearch, rate}) => {

  return (
    <div className="films">
      {films
        .filter(
          (film) =>
            film.title.toLowerCase().includes(inputSearch.toLowerCase()) && film.rating >= rate
        )
        .map((film, i) => (
          <MovieCard
            key={film.id}
           film={film}
          />
        ))}
    </div>
  );
};

export default MovieList;
