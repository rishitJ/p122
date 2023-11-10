x = 0;
y = 0;

draw_apple = "";

screen_width = 0
screen_height = 0;

i = 1

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload() 
{
  apple_png = loadIamge('apple.png')
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{
  console.log(event); 
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number = Number(content)
  if (Number.isInteger(to_number)) 
  {
    draw_apple = "set"
  }
  else
  {
    document.getElementById("status").innerHTML = "The Speech has not recognized any number"
  }
}
function setup() 
{
  screen_width = window.innerWidth
  screen_height = window.innerHeight

  canvas = createCanvas(300,200)
  canvas.center()

}
function draw() 
{
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    x = Math.floor(Math.random()*250)
    y = Math.floor(Math.random()*150)
    image(x, y, 32, 32)
    document.getElementById("status").innerHTML = to_number + "Apples drawn";
  }
}
function speak()
{
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
