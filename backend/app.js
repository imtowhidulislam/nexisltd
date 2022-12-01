import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
const port = 3001;

// ! Setting up the middleware???
app.use(cors());
app.use(bodyparser.json());
app.use("/api", router);

// ? Connecting with the DB:::
mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    },
    () => console.log("Connecting to the DB")
)

app.listen(port , () => console.log(`Server is running on the pors ${port}`));