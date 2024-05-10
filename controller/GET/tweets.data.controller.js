import data from "../../data/data.js"


export function getTweets(req, res) {
    try {
        res.status(200).json(data.tweets)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body);
}

export function getUser(req, res) {
    const name = req.params.name.toLowerCase().replace(/[^\w\s]+$g/,'');
     
    try {
        const user = data.tweets.filter(item => item.content.body.title.userName.toLowerCase().replace(/[^\w\s]/gi,'')  == name)
        if (!user) throw new Error(`No User with the name : ${name}`)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export function getCurrentUser(req, res) {
    const name = data.currentUser.userName
    try {
        const user = data.tweets.filter(item => item.content.body.title.userName  == name)
        if (!user) throw new Error(`No User with the name : ${name}`)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}