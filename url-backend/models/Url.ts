import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const url = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  }
})

const Url = mongoose.model('url', url);
export default Url;