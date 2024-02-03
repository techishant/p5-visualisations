let bob1, bob2, sp;
let control;

let nodes = [];
let connectors = [];
let n = 20;
let meanLength = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //   n = ceil(createSlider(1,80).value());
  l = 0;
  let node1, node2;
  weight = 0.7 / n;
  node1 = new Bob(width / 2, l, meanLength, weight);
  node1.fixed = true;
  nodes.push(node1);
  for (let i = 0; i < n - 1; i++) {
    l += meanLength;
    node2 = new Bob(250, l, meanLength, weight);
    nodes.push(node2);
    connectors.push(new Spring(node1, node2));
    node1 = node2;
  }

  //   nodes[nodes.length - 1].fixed = true;
  control = nodes.length - 1;
  console.log(nodes);
  console.log(connectors);
}
function draw() {
  background(40, 6, 28);
  strokeWeight(4);
  if (mouseIsPressed) {
    nodes[control].vel.set(0, 0);
    nodes[control].pos.x = mouseX;
    nodes[control].pos.y = mouseY;
  }

  for (i = 0; i < n - 1; i++) {
    connectors[i].update();
    // connectors[i].draw();
  }

  stroke(255, 255, 255);
  //   fill(30, 220, 255);
  noFill();
  beginShape();
  curveVertex(nodes[0].pos.x, nodes[0].pos.y);
  for (i = 0; i < n; i++) {
    nodes[i].update();
    nodes[i].draw();
    // noFill()
    curveVertex(nodes[i].pos.x, nodes[i].pos.y);
  }
  curveVertex(nodes[nodes.length - 1].pos.x, nodes[nodes.length - 1].pos.y);
  endShape();
  nodes[nodes.length-1].draw()
}

function distance(x1, y1, x2, y2) {
  let dist = Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
  return dist;
}
