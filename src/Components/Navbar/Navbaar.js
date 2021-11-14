import React, {useState} from 'react';
import {Navbar, Container, Nav, Form, Button,FormControl} from 'react-bootstrap';
import MovieAdd from '../MovieAdd/MovieAdd';
import ReactStars from "react-rating-stars-component";
import '../MovieList/MovieCard/MovieCard.css'
import { Link } from "react-router-dom";

const Navbaar = ({setInputSearch, addMovie, setRate}) => {

    const handleChange =(e)=> {
    let newValue= e.target.value;
    setInputSearch(newValue)
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Link to={"/"}><Navbar.Brand href="#" style={{color: "rgb(214, 3, 3)"}}>Movie App</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <MovieAdd addMovie={addMovie} />        
        </Nav>
        <Form className="d-flex">
        <ReactStars
        className="navRates"
        count={5}
        onChange={(e)=>setRate(e)}
        size={24}
        activeColor="#ffd700"
      />
          <FormControl
            type="search"
            placeholder="Search your movie"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
          />
          <Button variant="outline-success" className="btnSearching">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  );
}

export default Navbaar;
