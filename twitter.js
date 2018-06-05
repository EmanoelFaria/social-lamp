var twitterClient = require('twit');

class TwitterClass {

    constructor(credential){
        this.twitter = new twitterClient(credential);
    }

    comecarStream(word,callback){
        console.log('[PROCURANDO FONTE DE AMOR VERDADEIRO]')
        
        var stream = this.twitter.stream('statuses/filter', {'track': word });

        stream.on('tweet', (tweet)=>{
            console.log(tweet.text);
            callback(tweet)
        })
    
        stream.once('connected', ()=>{
            console.log('[SENTIMENTOS CALIBRADOS]');
        })
    
        stream.on('disconnect', (disconnectMessage)=>{
            console.log(disconnectMessage);
        })
    }

}

module.exports = TwitterClass;