import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ films, inputSearch, rateSearch }) => {
  console.log(rateSearch);
  return (
    <div className="films">
      {films
        .filter(
          (film) =>
            film.rating >= rateSearch &&
            film.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
        .map((film, i) => (
          <MovieCard
            key={film.id}
            title={film.title}
            affiche={film.affiche}
            description={film.description}
            rating={film.rating}
          />
        ))}
    </div>
  );
};

export default MovieList;
