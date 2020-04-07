import mongoose from 'mongoose'

const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    miles: {
      type: Number,
      required: true
    },
    startPoint: {
      type: String,
      required: true,
    },
    endPoint: {
      type: String,
      required: true
    },
    startingElevation: {
      type: Number,
      require: true
    },
    finalElevation: {
      type: Number,
      required: true
    },
    maxGradient: {
      type: Number,
      required: false
    },
    averageGradient: {
      type: Number,
      required: false
    },
    googleRoute: {
      type: String,
      required: false
    },
    iframeData: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model('Course', courseSchema);