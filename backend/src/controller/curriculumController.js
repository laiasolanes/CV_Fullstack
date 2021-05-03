/* eslint-disable no-underscore-dangle */
const Curriculum = require('../models/curriculumModel');
require('../models/curriculumModel');

function createCurriculum(req, res) {
  const newCurriculum = new Curriculum(req.body);

  newCurriculum.save();

  res.json(newCurriculum);
}

async function getCurriculum(req, res) {
  const allCurriculums = await Curriculum
    .find({})
  res.json(allCurriculums);
}

module.exports = {
  createCurriculum,
  getCurriculum,
};
