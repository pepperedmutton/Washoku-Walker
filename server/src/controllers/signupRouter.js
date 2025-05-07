import express from 'express';
import knex from '../knex.js'; 
import bcrypt from 'bcrypt';

const signupRouter = express.Router();

signupRouter.post('/', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({
      resultMessage: 'Missing fields',
      resultCode: 0
    });
  }
    const existing = await knex('users').where({ email }).first();
    if (existing) {
      return res.json({
        resultMessage: 'failure',
        resultCode: 0,
        data: 'User already registered'
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await knex('users').insert({
      email,
      name,
      password: hashedPassword
    });
    res.json({
      resultMessage: 'success',
      resultCode: 1,
      data: 'User registered'
    });
});

export default signupRouter;
