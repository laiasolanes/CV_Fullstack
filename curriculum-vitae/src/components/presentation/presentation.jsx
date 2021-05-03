import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import loadCurriculums from '../../redux/actions/actionCreators';
import './presentation.css';

function Presentation({ curriculums, actions }) {
  // eslint-disable-next-line no-debugger
  debugger;
  useEffect(() => {
    actions.loadCurriculums();
  }, []);

  return (
    curriculums
    && (
    <section className="flex presentation" id="presentation">

      <div className="presentation__text">

        <h4>
          {curriculums.presentation?.name}
        </h4>

        <h2>
          {curriculums.presentation?.position}
        </h2>

        {curriculums.presentation?.description.map((paragraf) => (
          <p>
            {paragraf}
          </p>
        ))}

        <Button
          variant="contained"
          href={curriculums.presentation?.downloadCV}
          target="_blank"
          className="button"
        >
          Descarregar CV
        </Button>

        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          color="primary"
          href={curriculums.presentation?.buttonLink}
          target="_blank"
          className="button button--color"
        >
          Veure GitHub
        </Button>

      </div>

      <div className="flex presentation__image">
        <img src={curriculums.presentation?.image} alt="Laia Solanes" />
      </div>

    </section>
    )
  );
}

Presentation.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
