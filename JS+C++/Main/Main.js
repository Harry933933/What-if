var slider_img = document.querySelector(".sliderPic");

var images = [
    "IMAGES/MAIN PICS/background.png",
    "IMAGES/WHAT IF DRAWINGS/SARCASTIC TERMITE.png",
    "IMAGES/WHAT IF DRAWINGS/dino.png",  
    "IMAGES/WHAT IF DRAWINGS/MARSHMALLOW WHALE.png",
    "IMAGES/WHAT IF DRAWINGS/ARENA.png"
  ];
var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length-1) i = -1;
	i++;
	return setImg();
}

function setImg(){
    return slider_img.setAttribute("src", images[i])
}