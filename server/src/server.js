import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import router from "./router.js";
import { fileURLToPath } from 'url';
import knex from "./knex.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import signupRouter from "./controllers/signupRouter.js";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JWT_SECRET = process.env.JWT_SECRET || "secret"


const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("../client/dist"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get("/api/test", (req, res) => {
  res.json({ ok: true, message: "testing" });
});
app.use("/api/signup",signupRouter)
app.post("/api/login", async (req, res) => {
  let{email,password} = req.body;
    console.log(req.body);
    const user = await knex('users').where({ email }).first();
    if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
    return res.json({
      resultMessage: 'success',
      resultCode: 1,
      token
    });
      }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
});
app.use("/api/restaurant", router);

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`🚀 Server running at: \x1b[36m%s\x1b[0m`, url);
});
