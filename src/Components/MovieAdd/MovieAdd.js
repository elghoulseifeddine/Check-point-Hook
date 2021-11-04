import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import './MovieAdd.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieAdd = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [affiche, setAffiche] = useState("");
  const [rating, setRating] = useState("");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuidv4(),
      title,
      affiche,
      description,
      rating,
    };

    if(title === "" || affiche=== "" || description === "" || rating === ""){return (closeModal(),
    alert("You are missing some inputs!!"))}

    addMovie(newMovie);
    closeModal();
    setTitle("");
    setDescription("");
    setAffiche("");
    setRating("")
  };

  return (
    <div>
      <button className="btnAdd" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title ..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Affiche :</Form.Label>
            <Form.Control
              placeholder="Enter Affiche ..."
              onChange={(e) => setAffiche(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Description : </Form.Label>
            <Form.Control
              placeholder="Enter description ..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Rating : </Form.Label>
            <Form.Control
              placeholder="Enter Rating (From 0 to 5) ..."
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) =>submitMovie(e)}
          >
            Add
          </Button>
        </Form>
    
      </Modal>
    </div>
  );
};

export default MovieAdd;