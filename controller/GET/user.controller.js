import { Router } from "express";
import { getUserData } from "../controller/GET/user.controller.js";

const userRoute = Router()

userRoute.get('/:name', getUserData)

export default userRoute