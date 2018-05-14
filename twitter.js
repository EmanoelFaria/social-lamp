var twitterClient = require('twit');

var credential = {
    consumer_key: '', 
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
}

var twitter = new twitterClient(credential)

class TwitterClass {

    comecarStream(word, callback){
        console.log('[PROCURANDO FONTE DE AMOR VERDADEIRO]')

        var stream = twitter.stream('statuses/filter', {
            'track': word
        })
    
        stream.on('tweet', function(tweet) {
            console.log(tweet.text);
            callback(tweet)
        })
    
        stream.once('connected', function() {
            console.log('[SENTIMENTOS CALIBRADOS]');
        })

        stream.on('disconnect', function(disconnectMessage) {
            console.log(disconnectMessage);
        })
    }

}

module.exports = new TwitterClass();