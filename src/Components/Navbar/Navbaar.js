import React, {useState} from 'react';
import {Navbar, Container, Nav, Form, Button,FormControl} from 'react-bootstrap';
import MovieAdd from '../MovieAdd/MovieAdd';
import ReactStars from "react-rating-stars-component";

const Navbaar = ({setInputSearch, addMovie, setRateSearch,rateSearch}) => {

    const handleChange =(e)=> {
    let newValue= e.target.value;
    setInputSearch(newValue)
  }
  // const ratingChanged = (newRating) => {
  //   setRateSearch(newRating);
  // };
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#" style={{color: "rgb(214, 3, 3)"}}>Movie App</Navbar.Brand>
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
    count={5}
    size={24}
    // value={5}
    activeColor="#ffd700"
    classNames="navRates"
    onChange={(e)=>setRateSearch(e)}
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
