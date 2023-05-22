var snakes2;
var canvas2 = document.getElementById('canvas2');;
// canvas2.width = 480;
// canvas2.height=270;
var context2 = canvas2.getContext('2d');
var interval2;
var milliseconds2 = 0;
var seconds2 = 0;
var minutes2 = 0;
var size2=40;
var temp=0;
var dx2=0;
var dy2=0;
var speed2=20;
var timeout2;
var your2;
var high2;
var face2 = 'none';

// canvas2.width=4000;
// canvas2.height=2000;
  // canvas2.width = window.innerWidth;
  // canvas2.height = window.innerHeight;

window.addEventListener('resize', windowResize());
function start2() {
	// canvas2 = document.getElementById('canvas2');
	windowResize();
 	// if (your2>high2) {high2=your2;document.getElementById('high2').innerText='high2 score: '+high2;}else{high2=0;}

	// face2 = 'none';
	
	// speed2=20;

	// milliseconds2 = 0;
	// seconds2 = 0;
	// minutes2 = 0;

		// dx2=0;
	// dy2=0;
	window.addEventListener('keydown', function(e){canvas2.key=e.keyCode;});
	window.addEventListener('keyup', function (e) {canvas2.key = false;});
	interval2 = setTimeout(refresh,speed2);
}



function windowResize () {
  
  // canvas2.width=6000
  // canvas2.height=3000
}


function endGame(){
	// clearInterval(interval2);
	clearTimeout(interval2);
    alert('Game Over! You have hit an obstacle or a wall!');

	location.reload();}
    // start();}

//snake tail
//obstacles + crash
//apples2 + enlarge
function refresh(){
	// snakes2[0].crash();
	
	

	// for(let snake of snakes2){
	// 	snake.speedX = 0;
  	// 	snake.speedY = 0;

	//  	if ((canvas2.key && canvas2.key == 37) || face2=='left') {snake.speedX = -1; face2='left';}
	// 	if ((canvas2.key && canvas2.key == 39) || face2=='right') {snake.speedX = 1; face2='right';}
 	// 	if ((canvas2.key && canvas2.key == 38) || face2=='down') {snake.speedY = -1; face2='down';}
 	// 	if ((canvas2.key && canvas2.key == 40) || face2=='up') {snake.speedY = 1; face2='up';}
	// 	snake.newPos();
	// 	snake.update();
	// 	snake.crash();
	// }
// 	for(snake of snakes2){
		
		// dx2=0;
		// dy2=0;
		
	 	// if (((canvas2.key && canvas2.key == 37) || face2=='left') && dx2 != 1) {dx2 = -1; dy2=0; face2='left';}
		// if (((canvas2.key && canvas2.key == 39) || face2=='right') && dx2 != -1) {dx2 = 1; dy2 = 0; face2='right';}
 		// if (((canvas2.key && canvas2.key == 38) || face2=='down') && dy2 != 1) {dy2 = -1; dx2 = 0; face2='down';}
 		// if (((canvas2.key && canvas2.key == 40) || face2=='up') && dy2 != -1) {dy2 = 1; dx2 = 0; face2='up';}
// 		snake.newPos();
// 		snake.update();

// 		for(let ob of obs2){
// 		ob.spawn();
// 		}
		// snake.crashObj();
		// snake.crashWall();
// }
 		

 		

		// console.log(snake.x)
}

function stopMove() {
  snake.speedX = 0;
  snake.speedY = 0;
}
