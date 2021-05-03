// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadCurriculums() {
  return async function dispatchInfo(dispatch) {
    const response = await axios('http://localhost:5000/cv');
    const data = response.data[0];
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch({
      type: actionTypes.LOAD_CURRICULUMS,
      data,
    });
  };
}
