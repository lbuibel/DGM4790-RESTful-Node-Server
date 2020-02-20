// import mongoose from 'mongoose'

// const Schema = mongoose.Schema

// const albumSchema = new Schema({
//     title: {
//       type: String,
//       required: true
//     },
//     price: {
//       type: Number,
//       required: true
//     },
//     description: {
//       type: String,
//       required: true
//     }
//   });
  
//   module.exports = mongoose.model('Album', albumSchema);
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
    }
  });
  
  module.exports = mongoose.model('Course', courseSchema);