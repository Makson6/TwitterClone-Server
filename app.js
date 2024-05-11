import express from "express";
import cors from "cors";
import currentUserRoute from "./routes/currentuser.routes.js";
import tweetsRoute from "./routes/tweets.routes.js";
import usersRoute from "./routes/users.routes.js";

const app = express();
const PORT = 8000;
app.use(cors())
app.use(express.json());
app.use("/tweets", tweetsRoute)
app.use("/users", usersRoute)
app.use("/currentUser", currentUserRoute)

app.listen(PORT, () => 
    console.log(`ce serveur http://localhost:${PORT}`))
