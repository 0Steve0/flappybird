var bird;
var pipes = [];
var score;
var hit;
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  score=0;
  hit=false;
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      hit=true;
      var gameOverHtml ="<h1>Result</h1>";
          gameOverHtml +="<h2 id='score'>Your Score: "+(score-1)+ "</h1>";
      var element = document.getElementById("score");
      element.innerHTML=gameOverHtml;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0&&hit==false) {
    pipes.push(new Pipe());
    score++;
  }

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
