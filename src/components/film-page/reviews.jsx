import React, {useEffect} from "react";
import {connect} from "react-redux";
import {FILM_DATA_TYPES} from "../types";
import PropTypes from "prop-types";
import {Spinner} from "../spinner/spinner";
import {ActionCreator} from "../../store/action";
import {fetchReviews} from "../../store/api-actions";

export const Reviews = (props) => {
  const {film, reviews, isReviewsLoaded, onLoadReviews, onResetReviews} = props;

  useEffect(() => {
    if (!isReviewsLoaded) {
      onLoadReviews(film.id);
    }
    return () => onResetReviews();
  }, []);

  if (!isReviewsLoaded) {
    return <Spinner />;
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">
                {review.comment}
              </p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>
                  {review.date}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  ...FILM_DATA_TYPES,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
  onResetReviews: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
    isReviewsLoaded: state.isReviewsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadReviews: (id) => dispatch(fetchReviews(id)),
    onResetReviews: () => dispatch(ActionCreator.resetReviews()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
