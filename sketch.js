function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
   
    
    stroke("lightblue")
    fill("purple");
    
    // console.log(mouseIsPressed);
   
    if(mouseIsPressed) {
       rect(mouseX, mouseY, 40, 40);
    } 
  }