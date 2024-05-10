import data from "../../data/data.js"

export function postTweets(req , res) {
    
    try {
        let id= Math.floor(Math.random() * 10000);
        let newTweet = {id ,...req.body}
        data.tweets.push(newTweet)
        res.status(201).json(data.tweets)
        
    } catch (error) {
        res.status(404).json(error)
    }


}