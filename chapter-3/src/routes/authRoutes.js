import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const router = express.Router();

router.post('/register', (req, res) => {
  res.send('Register!')
})

router.post('/login', (req, res) => {
  res.send('Login!')
})

export default router;
