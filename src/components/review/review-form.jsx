import React, {useState} from "react";
import {REVIEW_FORM_TYPES} from "../types";

const RATINGS = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];
const initialState = {
  rating: 10,
  comment: ``,
};

export const ReviewForm = (props) => {
  const {backgroundColor, filmId, onPostReview} = props;
  const [review, setReview] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onPostReview(filmId, review);
    setReview(initialState);
  };

  const handleRatingChange = (evt) => {
    setReview({
      ...review,
      rating: parseInt(evt.target.value, 10),
    });
  };

  const handleTextChange = (evt) => {
    setReview({
      ...review,
      comment: evt.target.value,
    });
  };

  const renderRatings = () => (
    <div className="rating">
      <div className="rating__stars">
        {RATINGS.map((rating) => (
          <React.Fragment key={rating}>
            <input
              className="rating__input"
              id={`star-${rating}`}
              type="radio"
              name="rating"
              value={rating}
              onChange={handleRatingChange}
            />
            <label
              className="rating__label"
              htmlFor={`star-${rating}`}
            >{`Rating ${rating}`}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      {renderRatings()}
      <div className="add-review__text" style={{
        backgroundColor,
        filter: `brightness(1.1)`,
      }}>
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleTextChange}
          value={review.comment}
        ></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = REVIEW_FORM_TYPES;
