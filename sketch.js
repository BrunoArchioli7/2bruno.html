function setup() {
    createCanvas(450, 400);
  background("black");
  }
  
  function draw() {
    
    stroke("gold");
    fill("red");
  
   console.log (mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }
  