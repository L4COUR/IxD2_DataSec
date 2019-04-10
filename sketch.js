var navig;

function setup(){
    //Canvas settings and Framerate
    createCanvas(800,400);
    background(10);

    navig = select('.menu');
    navig.mouseOver(changeBackground);

}

function draw(){
  ellipse(mouseX,mouseY,16,16)

}

function changeBackground() {
  navig.style('background-color', '#f0f');
}
