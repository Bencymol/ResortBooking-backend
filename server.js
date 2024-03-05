import express from "express";
import cors from "cors";
import mongoose from "./db/db.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(8080, () => {
  console.log("App is running @ http://localhost:8080/");
});
