import express from "express";
import pinroute from "./routes/pins.js";
import userroute from "./routes/users.js";
import connection from "./db/conn.js";
import cors from "cors";
const app = express();

const port = 5000 || process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/pins/", pinroute);
app.use("/api/users/", userroute);

//Database
connection();

//test port
app.get("/", (req, res) => {
  res.send("Hello!.....");
});

//listening
app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
