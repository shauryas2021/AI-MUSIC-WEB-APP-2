song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("angry_birds.mp3");
    song2 = loadSound("spider_man.mp3");
    }
function setup(){
   canvas = createCanvas(350, 350)
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.hide();
}



function draw(){
    image(video, 0, 0, 600, 500);
}
