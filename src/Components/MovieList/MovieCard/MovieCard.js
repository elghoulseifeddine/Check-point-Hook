import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ film: { id, title, affiche, description, rating } }) => {
  return (
    <div className="carde">
      <Link to={`/moviedetails/${id}`}>
        <Card className="bg-dark text-white film">
          <Card.Img src={affiche} alt="Card image" className="imge" />
          <Card.ImgOverlay>
            <Card.Title style={{ color: "rgb(214, 3, 3)", fontSize: "30px" }}>
              {title}
            </Card.Title>
            <Card.Text style={{ color: "rgb(214, 3, 3)", fontSize: "15px" }}>
              {description}
            </Card.Text>
          </Card.ImgOverlay>
          <ReactStars
            count={5}
            value={rating}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
