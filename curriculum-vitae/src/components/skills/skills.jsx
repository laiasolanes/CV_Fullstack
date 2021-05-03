import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import React, { useEffect } from 'react';
import loadCurriculums from '../../redux/actions/actionCreators';
import './skills.css';

function Skills({ curriculums, actions }) {
  useEffect(() => {
    actions.loadCurriculums();
  }, []);

  return (
    curriculums
    && (
    <>

      <section className="flex skills" id="skills">

        <div
          className="skills__title"
        >
          <h5>Coding Skills</h5>
          <h3>Habilitats</h3>
        </div>

        <div className="flex skills__views">
          {curriculums.skills?.map((skill) => (

            <div className="skills__item">
              <svg viewBox="0 0 36 36" className="circular-chart principal">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={skill.skillLevel}
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{skill.skillPercentage}</text>
              </svg>

              <p className="skill__subtitle">{skill.skillName}</p>
              <p>{skill.skillDescription}</p>
            </div>

          ))}
        </div>

      </section>
      <img
        src="https://www.laiasolanes.cat/wp-content/uploads/2019/08/domenico-loia-310197-unsplash_p.jpg"
        alt="Taula de despatch amb ordinador"
        className="skillsImage"
        data-aos="fade-right"
        data-aos-duration="2000"
      />

    </>
    )

  );
}

Skills.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
