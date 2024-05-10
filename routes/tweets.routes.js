import { Router } from "express";
import { getTweets } from "../controller/GET/tweets.data.controller.js";
import { postTweets } from "../controller/POST/post.tweets.controller.js";

const tweetsRoute = Router()

tweetsRoute.get('/', getTweets)
tweetsRoute.post('/', postTweets)

export default tweetsRoute