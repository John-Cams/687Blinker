let color = "blue";
const white = "white";

document.documentElement.requestFullscreen();
document.getElementById("text").style.color = color

const interval = setInterval(function flipColor(){
    console.log("hello")
    if(document.getElementById("text").style.color == color){
        document.getElementById("text").style.color = white
        document.body.style.background = color
   } else {
        document.getElementById("text").style.color = color
        document.body.style.background = white
   }
}, 1000)

