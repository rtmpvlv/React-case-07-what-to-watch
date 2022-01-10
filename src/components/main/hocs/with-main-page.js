import {connect} from "react-redux";
import {ActionCreator} from '../../../store/action';

function mapStateToProps(state) {
  return {
    selectedGenre: state.selectedGenre,
    filmsRendered: state.filmsRendered,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGenreChange(item) {
      dispatch(ActionCreator.changeGenre(item));
    },
    increaseRenderedFilmsQuantity(number) {
      dispatch(ActionCreator.increaseQuantity(number));
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps);
