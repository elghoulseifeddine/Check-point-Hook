import React from 'react';
import {Card} from 'react-bootstrap';
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({title, affiche, description, rating}) => {
  console.log(`${title} : ${rating}`)
  return (
    <div className="carde">
    <Card className="bg-dark text-white film">
    <Card.Img src={affiche} alt="Card image" className="imge" />
    <Card.ImgOverlay>
      <Card.Title style={{color: "rgb(214, 3, 3)",fontSize: "30px"}}>{title}</Card.Title>
      <Card.Text style={{color: "rgb(214, 3, 3)",fontSize: "15px"}}>
       {description}
      </Card.Text>
    </Card.ImgOverlay> 
    
    <ReactStars
    count={5}
    size={24}
    value={rating}
    edit={false}
    activeColor="#ffd700"
    classNames="rates"
  />
  </Card>
 
    </div>
  );
}
 
export default MovieCard;
