import express from 'express';
import knex from '../knex.js'; 
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import path from 'path';
dotenv.config({ path: '../.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const saveRouter = express.Router();

saveRouter.post('/', async (req, res) => {
  const placeId = req.params.placeID;
  const token = req.headers.Authorization;
  const user = jwt.verify(token, secret)
});

export default saveRouter;
