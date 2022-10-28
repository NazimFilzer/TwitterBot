const rwClient=require("./twitterClient");

const tweet=async()=>{
    try {
        await rwClient.v2.tweet("Testing Twitter Bot")
    } catch (error) {
        console.log(error);
    }
}

tweet()