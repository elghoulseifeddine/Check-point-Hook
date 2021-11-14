import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const MovieDetails = ({ films, match }) => {
  const [movie, setMovie] = useState({});
  console.log(match.params.myid);

  const findMovie = ()=> {
   setMovie(films.find(el => el.id === match.params.myid))
  }


  useEffect(() => {
    findMovie()
    console.log("my movie");
  }, []);

  return (
    <div style={{marginLeft: "500px"}}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.affiche} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>

    </Card.Body>
  </Card>
    </div>
  );
};

export default MovieDetails;
