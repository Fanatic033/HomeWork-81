import express from 'express';
import {UrlMutation, UrlT} from '../types';
import Url from '../models/Url';
import mongoose from 'mongoose';


const randomUrl = () => {
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  while (randomString.length < 6) {
    const getRandom = Math.floor(Math.random() * symbols.length);
    let randomLetter = symbols[getRandom];
    randomString += randomLetter;
  }
  return randomString;
}
randomUrl();

const urlRouter = express.Router();

urlRouter.post('/', async (req, res, next) => {
  try {
    let shortUrl: string
    let existUrl: UrlT | null

    do {
      shortUrl = randomUrl();
      existUrl = await Url.findOne({shortUrl});
    } while (existUrl);

    const allUrl: UrlMutation = {
      shortUrl,
      originalUrl: req.body.originalUrl,
    }
    const result = new Url(allUrl);
    await result.save();
    return res.send(result);
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      return res.status(404).send(e);
    }

    next(e);
  }
})


export default urlRouter;