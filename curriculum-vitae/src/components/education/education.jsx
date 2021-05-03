import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadCurriculums from '../../redux/actions/actionCreators';
import './education.css';

function Education({ curriculums, actions }) {
  useEffect(() => {
    actions.loadCurriculums();
  }, []);

  return (
    curriculums
    && (
    <section className="flex education" id="education">

      <div className="title">
        <h5>Educació</h5>
        <h3>
          Estudis realitzats
        </h3>
      </div>

      <div className="flex education__items">

        {curriculums.formation?.map((course) => (

          <div className="flex education__box">

            <div className="flex education__title">
              <div className="year"><p>{course.year}</p></div>
              <div className="course"><p>{course.course}</p></div>
            </div>

            <div className="education__text">
              <p>{course.description}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
    )
  );
}

Education.propTypes = {
  curriculums: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadCurriculums: PropTypes.func,

  }).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return { curriculums: state.curriculumReducer.curriculums };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadCurriculums }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
