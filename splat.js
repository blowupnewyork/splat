let vx = 0;
let vy = 0;

function setup() {
  createCanvas(1200, 800);
  background(0);
  frameRate(120);
}

function draw() {

	strokeWeight(vx + vy * 10);
  stroke(255);
  noFill();

  vx = (mouseX - pmouseX);
  vy = (mouseY - pmouseY);



  if (mouseIsPressed === true) {
     curve(mouseX, mouseY, (mouseX + pmouseX) /3, (mouseY + pmouseY) /3,(mouseX + pmouseX) /2, (mouseY + pmouseY) /2, pmouseX, pmouseY);
  

  // for (let i = 0; i < 200; i += 20) 
  //   bezier(
  //     mouseX,
  //     mouseY,
  //     pmouseX,
  //     pmouseY
  //   );
  }

}
