import React, { useState } from "react";

interface StarRatingProps {
  maxRating: number;
  filled: number;
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating, filled }) => {
  const [rating, setRating] = useState(filled);

  const handleClick = (newRating: number) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? "filled" : ""}`}
          onClick={() => handleClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className="rating cursor-pointer ml-2">{renderStars()}</div>;
};

export default StarRating;
