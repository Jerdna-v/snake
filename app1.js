var snakes;
var canvas = document.getElementById('canvas1');;
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

var snakes2;
var canvas2 = document.getElementById('canvas2');;
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
var face2 = 'not';
var obs2;
var face = 'none';

window.addEventListener('resize', windowResize());

function start1() {
	windowResize();
	your=0;
	your2=0;
	obs2=[new Obstacle2(500,50), new Obstacle2(50,500), new Obstacle2(200,200)];
	obs=[new Obstacle(500,50), new Obstacle(50,500), new Obstacle(200,200)];
	snakes2 = [new Snake2(105,0),new Snake2(70,0), new Snake2(35,0),new Snake2(0,0)];
	snakes = [new Snake(105,0),new Snake(70,0), new Snake(35,0),new Snake(0,0)];
	apple=new Apple(40,40)
	apples=1	
	apple2=new Apple2(40,40)
	apples2=1	
	for(snake of snakes2){snake.init();}
	for(snake of snakes){snake.init();}
	window.addEventListener('keydown', function(e){canvas.key=e.keyCode;canvas2.key=e.keyCode});
	window.addEventListener('keyup', function (e) {canvas.key = false;canvas2.key = false;});
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
  document.getElementById('timer1').innerText = formattedTime;
}
function windowResize () {
  canvas.width = parseInt(window.innerWidth)/2*4;
  canvas.height = parseInt(window.innerHeight)/2*4*2;
  canvas2.width = parseInt(window.innerWidth)/2*4;
  canvas2.height = parseInt(window.innerHeight)/2*4*2;
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
	    if (this.x <= 0 || this.y <= 0|| this.x+size >= canvas.width || this.y+size >= canvas.height) {
	    	endGame(1);
	    }
  }
  	this.crashObj = function() {
  		for(let ob of obs){
		    if ((this.y+size < ob.y) ||
		    (this.y > ob.y+ob.h) ||
		    (this.x+size < ob.x) ||
		    (this.x > ob.x+ob.w)) {
		    }else{endGame(1);}
		}
	}
	  	this.crashApple = function() {
		    if ((this.y+size < apple.y) ||
		    (this.y > apple.y+apple.h) ||
		    (this.x+size < apple.x) ||
		    (this.x > apple.x+apple.w)) {
		    }else{apples=0;
		  your++;
		  snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy));
		  snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy)); 
		  document.getElementById('score1').innerText='Player1 score: '+ your;
			}
	}
}
function Snake2(x,y){
	this.x=x;
	this.y=y;
	this.init=function(){
		
		this.x = canvas2.width/5+this.x;
		this.y = canvas2.height/2+this.y;
	}
	this.update = function(){
		context2.fillStyle='#1d3b00';
		context2.strokeStyle='#97c503';
		context2.fillRect(this.x,this.y,size2,size2);
		context2.strokeRect(this.x,this.y,size2,size2);
	}
	this.crashWall = function() {
	    if (this.x <= 0 || this.y <= 0|| this.x+size2 >= canvas2.width || this.y+size2 >= canvas2.height) {
	    	endGame(2);
	    }
  }
  	this.crashObj = function() {
  		for(let ob of obs2){
		    if ((this.y+size2 < ob.y) ||
		    (this.y > ob.y+ob.h) ||
		    (this.x+size2 < ob.x) ||
		    (this.x > ob.x+ob.w)) {
		      
		    }else{endGame(2);}
		}
	}
	  	this.crashApple = function() {
		    if ((this.y+size2 < apple2.y) ||
		    (this.y > apple2.y+apple2.h) ||
		    (this.x+size2 < apple2.x) ||
		    (this.x > apple2.x+apple2.w)) { 
		    }else{apples2=0;
		  your2++;
		  snakes2.unshift(new Snake2(snakes2[0].x + dx2, snakes2[0].y + dy2));
		  snakes2.unshift(new Snake2(snakes2[0].x + dx2, snakes2[0].y + dy2)); 
		  document.getElementById('score2').innerText='Player2 score: '+ your2;
			}
	}
}
function Obstacle2(w,h){
	this.w=w;
	this.h=h;
	this.x = Math.floor(Math.random()*(canvas2.width-this.w));
	this.y = Math.floor(Math.random()*(canvas2.height-this.h));
	this.spawn = function(){
		context2.fillStyle='black';
		context2.fillRect(this.x,this.y,this.w,this.h);
	}
}

function Apple2(w,h){
	this.w=w;
	this.h=h;
	this.x = Math.floor(Math.random()*(canvas2.width-this.w));
	this.y = Math.floor(Math.random()*(canvas2.height-this.h));
	this.spawn = function(){
		context2.fillStyle='red';
		context2.fillRect(this.x,this.y,this.w,this.h);
	}
}
function endGame(player){
  if(player=='1'){stopMove();face='not';document.getElementById('lost1').style.display="block";}
  else if(player=='2'){stopMove2();face2='none';document.getElementById('lost2').style.display="block";}
  if(face=='not' && face2=='none'){clearTimeout(interval);
	document.getElementById('lost').style.display="block";
	reset = setTimeout(reseter,20);}
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
function time2() {
  milliseconds2 += 20;

  if (milliseconds2 >= 1000) {
    milliseconds2 = 0;
    seconds2++;

    if (seconds2 >= 60) {
      seconds2 = 0;
      minutes2++;
    }
  }

  var formattedTime2 = (minutes2 < 10 ? '0' + minutes2 : minutes2) + ':' + (seconds2 < 10 ? '0' + seconds2 : seconds2) + ':' + (milliseconds2 < 100 ? '0' : '') + Math.floor(milliseconds2 / 10);
  document.getElementById('timer2').innerText = formattedTime2;
}

function refresh(){
	context.clearRect(0,0,canvas.width,canvas.height);
	for(let ob of obs){ob.spawn();}
	apple.spawn();
	context2.clearRect(0,0,canvas2.width,canvas2.height);
	for(let ob of obs2){ob.spawn();}
	apple2.spawn();
	for(let snake of snakes){
 			snake.update();
 			snake.crashObj();
			snake.crashWall();
			snake.crashApple();
			if(apples==0){apple=new Apple(40,40); apples=1;}}
	if (face!='not' && face!='none'){time();move();}
		for(let snakez of snakes2){
 			snakez.update();
 			snakez.crashObj();
			snakez.crashWall();
			snakez.crashApple();
			if(apples2==0){apple2=new Apple2(40,40); apples2=1;}}
	if (face2!='none' && face2!='not'){time2();move2();}
		if (((canvas.key === 65) || face=='left') && dx !=speed) {
        dx = -1*speed;
        dy = 0;
        face='left';
      }
      if (((canvas.key === 87) || face=='up') && dy!=speed) {
        dx = 0;
        dy = -1*speed;
        face='up';
      }
      if (((canvas.key === 68) || face=='right') && dx !=-speed) {
        dx = speed;
        dy = 0;
        face='right';
      }
      if (((canvas.key === 83) || face=='down') && dy!=-speed) {
        dx = 0;
        dy = speed;
        face='down';
      }
      
      if (((canvas2.key === 37) || face2=='left') && dx2 !=speed2) {
        dx2 = -1*speed2;
        dy2 = 0;
        face2='left';
      }
      if (((canvas2.key === 38) || face2=='up') && dy2!=speed2) {
        dx2 = 0;
        dy2 = -1*speed2;
        face2='up';
      }
      if (((canvas2.key === 39) || face2=='right') && dx2 !=-speed2) {
        dx2 = speed2;
        dy2 = 0;
        face2='right';
      }
      if (((canvas2.key === 40) || face2=='down') && dy2!=-speed2) {
        dx2 = 0;
        dy2 = speed2;
        face2='down';
      }
      interval = setTimeout(refresh,speed);
}
function move(){
	snakes.unshift(new Snake(snakes[0].x + dx, snakes[0].y + dy));
 	snakes.pop();
}
function move2(){
	snakes2.unshift(new Snake2(snakes2[0].x + dx2, snakes2[0].y + dy2));
 	snakes2.pop();
}
function stopMove() {
  dx = 0;
  dy = 0;
}
function stopMove2() {
  dx2 = 0;
  dy2 = 0;
}