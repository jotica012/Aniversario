let img;
let img2;
let img3;
function preload() { 
  img = loadImage('sources/ani4.png');
  img2 = loadImage('sources/ani_si.png');
  img3 = loadImage('sources/Ani_no.png');
}

function setup() {
  pantalla = 0;
  createCanvas(839.056, 595.276);
  
}

function draw() {
  background(255);
  switch (pantalla) {
		case 0:
			// pantalla de inicio
      image(img,0,0, 839.056, 595.276);
		break;
		case 1:
			// sí
      image(img2, 0, 0, 839.056, 595.276);
		break;
    case 2:
			// no
      image(img3, 0, 0, 839.056, 595.276);
		break;
  }
  
}

function mousePressed() {
      if (dist(mouseX, mouseY, 62.936, 445.388) < 100) {
        pantalla = 1;
      }else if (dist(mouseX, mouseY, 660.932, 445.388) < 100) {
        pantalla = 2;
      }
    
  }
