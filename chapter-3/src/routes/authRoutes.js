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

  try {
    const insertUser = db.prepare(`
      INSERT INTO users (username, password)
      VALUES (?, ?)
    `);

    const result = insertUser.run(username, hashedPassword);

    // Default todo item
    const defaultTodo = `Hello ${username}! Add your first todo!`;
    const insertTodo = db.prepare(`
      INSERT INTO todos (user_id, task) VALUES (?,?)
    `);
    insertTodo.run(result.lastInsertRowid, defaultTodo);

    // Create a token
    const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'} ); 

    // Finally return a token
    res.json({token});
  }
  catch (err){
    console.log(err.message);
    res.sendStatus(503);
  }

  res.sendStatus(201);
})

router.post('/login', (req, res) => {
})

export default router;
