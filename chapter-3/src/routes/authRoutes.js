import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const SALT = parseInt(process.env.SALT);


const router = express.Router();

router.post('/register', (req, res) => {
  const {username, password} = req.body;

  const hashedPassword = bcrypt.hashSync(password, SALT);

  console.log(username, hashedPassword);

  res.sendStatus(201);
})

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  const hashedPassword = bcrypt.hashSync(password, SALT);

  console.log(username, hashedPassword);
})

export default router;
