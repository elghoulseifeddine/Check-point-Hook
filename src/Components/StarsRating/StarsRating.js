import React from 'react';
import ReactStars from "react-rating-stars-component";
import './StarsRating.css';

const StarsRating = ({rating}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    value={rating}
    edit={false}
    activeColor="#ffd700"
    classNames="rates"
  />
  );
}

export default StarsRating;

  