//Alissa Diaz h3 ©2016


function setup() {
  createCanvas(1000,700);
  background(0);
var j = 100;
var x = 500;

  for(var y=1; y<700; y=y+20) {
    fill(244, 202, 255, y*.1);
    strokeWeight(5)
    stroke(162, 0, 64)
    ellipse(x, y, x-450, y*0.5)

    fill(250, 0.1);
    stroke(20, 115, 186)
    strokeWeight(5)
    j=j*2;
    ellipse(x, y, j*.05);

    fill(187, 232, 255, 100);
    ellipse(x, y, y*0.5)

    fill(244, 202, 255, 100)
    ellipse(j, y+10, j)
    fill(24, 124, 177, 100)
    ellipse(j, y+100, x)
    fill(171, 0, 81, 100)
    ellipse(j, y+500, x)

    push();
    fill(255, 255, 255, 10)
    stroke(90, 0, 156, 100)
    strokeWeight(10)
    ellipse(1000, y+200, y)
    ellipse(0, y+200, y)
    pop();

    fill(244, 202, 255, 20)
    stroke(0)
    ellipse(0, y, j)





    }
  }

function draw(){




}
