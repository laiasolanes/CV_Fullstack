const { model, Schema } = require('mongoose');

const curriculumSchema = new Schema({

  presentation: {
    name: String,
    position: String,
    image: String,
    description: [String],
    downloadCV: String,
    buttonLink: String,
  },

  skills: [{
    skillName: String,
    skillDescription: String,
    skillLevel: String,
    skillPercentage: String,
  }],

  experience: {

    barsExperience: [
      {
        themeBars: String,
        percentBarc: Number,
      },
    ],

    positionExperience: [
      {
        years: String,
        position: String,
        company: String,
      },
    ],

  },

  formation: [
    {
      year: String,
      course: String,
      description: String,
    },
  ],

});

module.exports = model('Curriculums', curriculumSchema);
