import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';

import bcrypt from 'bcrypt';
import path from 'path';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const JWT_SECRET = process.env.JWT_SECRET;


export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  // Check header exists
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader;


    //  Verify token — throws error if invalid/expired
    const decoded = jwt.verify(token,JWT_SECRET);
    
    // Attach user data to request object
    req.user = decoded;

    next(); // continue to route handler
  
}