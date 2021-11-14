import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import Navbaar from "./Components/Navbar/Navbaar";
import { Films } from "./Films";
import { Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [films, setFilms] = useState(Films);
  const [rate, setRate] = useState(0);

  const addMovie = (newMovie) => {
    return setFilms([...films, newMovie]);
  };

  return (
    <div className="App">
      <Navbaar
        addMovie={addMovie}
        setInputSearch={setInputSearch}
        setRate={setRate}
      />
      <div className="headTitle">
        <h1 className="c1"> M </h1> <h1 className="c2"> Y </h1> <br />{" "}
        <h1 className="c3"> M </h1> <h1 className="c4"> O </h1>{" "}
        <h1 className="c5"> V </h1> <h1 className="c6"> I </h1>{" "}
        <h1 className="c7"> E </h1> <h1 className="c8"> S </h1>
      </div>

      <Route
        exact
        path="/"
        component={() => (
          <MovieList films={films} inputSearch={inputSearch} rate={rate} />
        )}
      />

      <Route
        exact
        path="/moviedetails/:myid"
        render={(defaultProps) => (
          <MovieDetails films={films} {...defaultProps} />
        )}
      />
    </div>
  );
}

export default App;
