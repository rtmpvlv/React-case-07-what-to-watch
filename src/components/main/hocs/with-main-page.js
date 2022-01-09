import {connect} from "react-redux";
import {ActionCreator} from '../../../store/action';

function mapStateToProps(state) {
  return {
    selectedGenre: state.selectedGenre,
    // filmsData: state.filmsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGenreChange(item) {
      dispatch(ActionCreator.changeGenre(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
