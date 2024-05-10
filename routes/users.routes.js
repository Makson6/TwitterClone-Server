import { Router } from "express";
import { getUser } from "../controller/GET/tweets.data.controller.js";

const usersRoute = Router()

usersRoute.get('/:name', getUser)

export default usersRoute