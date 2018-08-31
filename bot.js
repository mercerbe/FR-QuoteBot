//dependencies
const Twit = require('twit')
const TwitterBot = require('node-twitterbot').TwitterBot
require('dotenv').config()

//config twitter app access
var Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
})

//quotes
const quotesArray = require('./quotes.js')

//pick random quote from array
function pickQuote(array) {
  return array[Math.floor(Math.random() * array.length)]
}

//grab quote from array 
const quote = pickQuote(quotesArray)

//tweet picked quote
Bot.tweet(quote)
