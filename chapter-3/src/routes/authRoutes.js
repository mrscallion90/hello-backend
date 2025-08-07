import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const router = express.Router();

router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, process.env.SALT);

  console.log(username, password);

  res.sendStatus(201);
})

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, process.env.SALT);
})

export default router;
