const twitter   = require('./twitter');
const five      = require("johnny-five");
const board     = new five.Board();

const credential = {
    consumer_key: '', 
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
}

board.on("ready", ()=> {
    console.log("[INICIANDO SENTIMENTOS]");
    
    var led = new five.Led(13);
    var twitter = new twitter(credential)

    twitter.comecarStream('amor',()=>{
        led.on()
        setTimeout(()=>{
            led.off();
        },1000);
    })
});


