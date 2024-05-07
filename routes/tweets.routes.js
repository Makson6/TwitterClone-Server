import { Router } from "express";
import { getAllData } from "../controller/GET/data.controller.js";

const tweetsRoute = Router()

tweetsRoute.get('/', getAllData)

export default tweetsRoute