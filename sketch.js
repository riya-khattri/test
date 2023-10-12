function setup() {
  
  var r =25;
  var y =40;
  
  ellipseMode(CORNER);
  createCanvas(400, 400);
  background(220);
  
  for(var i=0;i<width/r; i++){
  var n=width/r;
    
  fill(i*(255/n),i*(255/n),255);
  ellipse(i*r,y,r);
  
  }
}

function draw() {}