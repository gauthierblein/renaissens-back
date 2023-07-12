import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';



// Routes
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'
import eventRoute from './routes/eventRoute.js'
import testimonialRoute from './routes/testimonialRoute.js'
import intervenantRoute from './routes/intervenantRoute.js'

/* CONFIGURATIONS */

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use Helmet!
app.use(
  helmet({crossOriginEmbedderPolicy: false, crossOriginResourcePolicy: false})
);

// CORS configuration
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })

    



/* ROUTES */
app.use('/', userRoute)
app.use('/', postRoute)
app.use('/', eventRoute)
app.use('/', testimonialRoute)
app.use('/', intervenantRoute)

/* LISTEN TO PORT */
const port = process.env.PORT || 3000 ;
app.listen(port, () =>
      console.log(`Listening at ${port}`)
    )



