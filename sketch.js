var video;
var button;
var snapshots = {
  array: [],
  width: 320,
  height: 240,
};

var xdim = 800;
var ydim = 240;

function setup() {
  createCanvas(800, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  //video.hide();

  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  //snapshots.push(video.get())
  image(video, 0, 0);
}


function draw() {
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], 320, 240);
  }

//image(video, 0, 0);
}
