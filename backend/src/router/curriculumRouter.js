const { Router } = require('express');
const curriculumController = require('../controller/curriculumController');

function FarmaRouter() {
  const router = Router();

  router
    .route('/')
    .post(curriculumController.createCurriculum)
    .get(curriculumController.getCurriculum);

  return router;
}

module.exports = FarmaRouter();
