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

const productSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model('Album', productSchema);