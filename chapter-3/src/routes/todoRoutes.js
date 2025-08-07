import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const router = express.Router();


// Get all todo items from logged in user
router.get('/', (req, res) => { });

// Create a new todo item for user
router.post('/', (req, res) => { });

// Update a  todo item for user
router.put('/:id', (req, res) => { });

// Delete a todo item for user
router.delete('/:id', (req, res) => { });



export default router;
