var canvas;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayer;


function setup(){

  createCanvas(500,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

function draw(){
 
}


