import actionTypes from '../actions/actionTypes';

export default function curriculumReducers(state = { curriculums: [] }, { type, data }) {
  switch (type) {
    case actionTypes.LOAD_CURRICULUMS:
      // eslint-disable-next-line no-debugger
      debugger;
      return { ...state, curriculums: data };

    default:
      return state;
  }
}
