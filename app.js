import express from "express";
import tweetsRoute from "./routes/tweets.routes.js";


const PORT = 8000;
const app = express();

app.use(express.json());
app.use("/tweets", tweetsRoute)

app.listen(PORT, () => 
    console.log(`ce serhttp://localhost:${PORT}`))
