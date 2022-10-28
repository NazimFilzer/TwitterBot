const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "Enter Appkey",
    appSecret: "Enter App secret",
    accessToken: "Enter Token",
    accessSecret: "Enter AccessSecret"
})

const rwClient = client.readWrite
ss

module.exports = rwClient;