var song;
var myFont;

function preload() {
  // "SCP-x2x (Unseen Presence)" Kevin MacLeod (incompetech.com)
    // Licensed under Creative Commons: By Attribution 4.0 License
    // http://creativecommons.org/licenses/by/4.0/
  soundFormats('mp3', 'ogg');
  song = loadSound('assets/SCP-x2x.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed); 
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  song.play();
}

function draw() {
  background(231, 40, 49);
}
