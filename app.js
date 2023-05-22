var snakes;
var canvas = document.getElementById('canvas');;
var context = canvas.getContext('2d');
var interval;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var size=40;
var temp=0;
var dx=0;
var dy=0;
var speed=20;
var timeout;
var your;
var high;
var restart;
var stopped=false;
var face = 'none';
// var el = document.querySelector('body')

window.addEventListener('resize', windowResize());

function start() {
	windowResize();
	your=0;
	obs=[new Obstacle(500,50), new Obstacle(50,500), new Obstacle(200,200)];
	snakes = [new Snake(105,0),new Snake(70,0), new Snake(35,0),new Snake(0,0)];
	apple=new Apple(40,40)
	apples=1	
	for(snake of snakes){snake.init();}
	window.addEventListener('keydown', function(e){canvas.key=e.keyCode; restart=e.keyCode;});
	window.addEventListener('keyup', function (e) {canvas.key = false;});
	window.addEventListener('load', function(){
		swipedetect(el, function(swipedir){
			if(swipedir == 'right'){canvas.key=39}
			if(swipedir == 'left'){canvas.key=37}
			if(swipedir == 'down'){canvas.key=40}
			if(swipedir == 'top'){canvas.key=38}
   })}, false);
	canvas.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

canvas.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        // alert(swiped + 'left!');
    	canvas.key=37
    }
    if (touchendX > touchstartX) {
        // alert(swiped + 'right!');\
    	canvas.key=39
    }
    if (touchendY < touchstartY) {
        // alert(swiped + 'down!');
    	canvas.key=40
    }
    if (touchendY > touchstartY) {
        // alert(swiped + 'left!');
    	canvas.key=38
    }
    if (touchendY == touchstartY) {
        // alert('tap!');
    }
}
	interval = setTimeout(refresh,speed);
	
}

function time() {
  milliseconds += 20;

  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
  }

  var formattedTime = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 100 ? '0' : '') + Math.floor(milliseconds / 10);
  document.getElementById('timer').innerText = formattedTime;
}
function windowResize () {
  canvas.width = parseInt(window.innerWidth)*4;
  canvas.height = parseInt(window.innerHeight)*4;
}
function Snake(x,y){
	this.x=x;
	this.y=y;
	this.init=function(){
		this.x = canvas.width/5+this.x;
		this.y = canvas.height/2+this.y;
	}
	this.update = function(){
		context.fillStyle='#1d3b00';
		context.strokeStyle='#97c503';
		context.fillRect(this.x,this.y,size,size);
		context.strokeRect(this.x,this.y,size,size);
	}
	this.crashWall = function() {
	    if (this.x <= 0 || this.y <= 0|| this.x+size >= canvas.width || this.y+size >= canvas.height) {endGame();}
  }
  	this.crashObj = function() {
  		for(let ob of obs){
		    if ((this.y+size < ob.y) ||
		    (this.y > ob.y+ob.h) ||
		    (this.x+size < ob.x) ||
		    (this.x > ob.x+ob.w)) {}
		    	else{endGame();}
		}
	}
	  	this.crashApple = function() {
		    if ((this.y+size < apple.y) ||
		    (this.y > apple.y+apple.h) ||
		    (this.x+size < apple.x) ||
		    (this.x > apple.x+apple.w)) {}
		    else{apples=0;
		  your++;
		  snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy));
		  snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy)); 
		  document.getElementById('your').innerText='Your score: '+ your;
			}
	}
}

function endGame(){
	clearTimeout(interval);
	stopMove();
	stopped=true;
	document.getElementById('lost').style.display="block";
	reset = setTimeout(reseter,20);

}
function reseter() {
		if(canvas.key===32){
			clearTimeout(reset);
			location.reload();
	}
	reset=setTimeout(reseter,20)
}
function Obstacle(w,h){
	this.w=w;
	this.h=h;
	this.x = Math.floor(Math.random()*(canvas.width-this.w));
	this.y = Math.floor(Math.random()*(canvas.height-this.h));
	this.spawn = function(){
		context.fillStyle='black';
		context.fillRect(this.x,this.y,this.w,this.h);
	}
}

function Apple(w,h){
	this.w=w;
	this.h=h;
	this.x = Math.floor(Math.random()*(canvas.width-this.w));
	this.y = Math.floor(Math.random()*(canvas.height-this.h));
	this.spawn = function(){
		context.fillStyle='red';
		context.fillRect(this.x,this.y,this.w,this.h);
	}
}
function refresh(){
	context.clearRect(0,0,canvas.width,canvas.height);
	for(let ob of obs){ob.spawn();}
	apple.spawn();
	for(let snake of snakes){
 			snake.update();
 			snake.crashObj();
			snake.crashWall();
			snake.crashApple();
			if(apples==0){apple=new Apple(40,40); apples=1;}}
	if (face!='none'){time();move();}
		if (((canvas.key === 37) || face=='left') && dx !=speed) {
        dx = -1*speed;
        dy = 0;
        face='left';
      }
      if (((canvas.key === 38) || face=='up') && dy!=speed) {
        dx = 0;
        dy = -1*speed;
        face='up';
      }
      if (((canvas.key === 39) || face=='right') && dx !=-speed) {
        dx = speed;
        dy = 0;
        face='right';
      }
      if (((canvas.key === 40) || face=='down') && dy!=-speed) {
        dx = 0;
        dy = speed;
        face='down';
      }
      if(!stopped){interval = setTimeout(refresh,speed);}
}
function move(){
	snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy));
 	snakes.pop();
}
function stopMove() {
  dx = 0;
  dy = 0;
}
