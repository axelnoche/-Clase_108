var reconocedorVoz = window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Textbox = document.getElementById( "textbox");

function start(){
    document.getElementById("microfono").src="microfono.png";
     document.getElementById("textbox").innerHTML = ""; 
     reconocedor.start();
      setTimeout(function()
    {
        document.getElementById("microfono").src = "microfono.png";
    
    }, 4000
    );

}
 reconocedor.onresult = function(event){
    console.log(event);
    var contenido = event.results[0] [0].transcript;
    document.getElementById("textbox").innerHTML = contenido;
    console.log(contenido);

    var contenidoMinus = contenido.toLowerCase();
    
    if (contenidoMinus == "toma mi selfie")
    {
        console.log(contenidoMinus + "tomando mi selfie ---");
        speak();
    };
 }
function speak(){
     var habla = window.speechSynthesis;
      speak_data = "Tu selfie se tomará en 3 segundos";
       var diEsto = new SpeechSynthesisUtterance(speak_data);
       diEsto.pitch = 10;
       diEsto.volume = 0.4;
       habla.speak(diEsto);
       Webcam.attach(camera);
       setTimeout (function(){
        tomar_foto();
        save ();

       },3000);
       }
    camera = document.getElementById("camera");
    Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
    });

    function tomar_foto(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        });
    }

    function save(){
        link = document.getElementById("link");
        image = document.getElementById("selfie_image");
        link.href = image;
        link.click()
        
    }