import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import Navbaar from "./Components/Navbar/Navbaar";
import { Films } from "./Films";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [films, setFilms] = useState(Films);
  const [rateSearch,setRateSearch] = useState(0);

  const addMovie = (newMovie) => {
    return setFilms([...films, newMovie]);
  };

  return (
    <div className="App">
      <Navbaar addMovie={addMovie} setInputSearch={setInputSearch} setRateSearch={setRateSearch} rateSearch={rateSearch}/>
      <div className="headTitle">
        <h1 className="c1"> M </h1> <h1 className="c2"> Y </h1> <br />{" "}
        <h1 className="c3"> M </h1> <h1 className="c4"> O </h1>{" "}
        <h1 className="c5"> V </h1> <h1 className="c6"> I </h1>{" "}
        <h1 className="c7"> E </h1> <h1 className="c8"> S </h1>
      </div>

      <MovieList films={films} inputSearch={inputSearch} rateSearch={rateSearch} />
    </div>
  );
}

export default App;
