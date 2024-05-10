import { Router } from "express";
import { getCurrentUser } from "../controller/GET/tweets.data.controller.js";

const currentUserRoute = Router()

currentUserRoute.get('/', getCurrentUser)

export default currentUserRoute