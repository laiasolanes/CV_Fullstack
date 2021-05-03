import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadCurriculums from '../../redux/actions/actionCreators';
import './experience.css';

function Experience({ curriculums, actions }) {
  useEffect(() => {
    actions.loadCurriculums();
  }, []);

  return (
    curriculums
    && (
    <section className="flex experience" id="experience">

      <div className="experience__bars">
        <div
          className="experience__title"
        >
          <h5>Experiència</h5>
          <h3>
            La meva experiència
            {' '}
            <br />
            {' '}
            professional
          </h3>
        </div>
        {curriculums.experience?.barsExperience.map((bar) => (
          <>
            {' '}
            <p>{bar.themeBars}</p>

            <div className="container">
              <div className="skill">
                {/* style={{ width: `${bar.percentBarc}%` }} */}
                {bar.percentBarc}
                %
              </div>
            </div>

          </>
        ))}

      </div>

      <div className="flex experience__boxes">

        {curriculums.experience?.positionExperience.map((position) => (
          <div
            className="flex box__detail"
            data-aos="fade-in-up"
          >

            <div className="flex detail__circle">
              <div className="flex detail--out">
                <div className="flex detail--in" />
              </div>
            </div>

            <div className="detail__text">
              <div className="year"><p>{position.years}</p></div>
              <div className="position"><p>{position.position}</p></div>
              <div className="company"><p>{position.company}</p></div>
            </div>

          </div>
        ))}

      </div>

    </section>
    )
  );
}

Experience.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
