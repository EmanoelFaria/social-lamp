var twitter   = require('./twitter');
var five      = require("johnny-five");
var board     = new five.Board();       

board.on("ready", ()=> {
    console.log("[INICIANDO SENTIMENTOS]");

    //só pode iniciar o led depois que o board for iniciado
    var led = new five.Led(13);

     /*chamo o método comecarStream da classe twitter passando a palavra para ser 
    capturada e o metodo que será executado sempre que achar um tweet com a palavra amor */
    twitter.comecarStream('amor', ()=>{

        //liga o led
        led.on()

        //desliga o led depois de 1 seg
        setTimeout(()=>{
            led.off();
        },1000);
        
    })

});


