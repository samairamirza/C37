class Form {
    constructor(){
         
        this.input = createInput("NAME ");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3')
    }

 hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide()
 }   

display(){
var title = createElement('h2');
title.html("CAR RACING GAME");
title.position(400,100)


this.input.position(450,250);


this.button.position(480,280);



this.button.mousePressed(function(){
this.input.hide();
this.button.hide();

player.name = this.input.value();

playerCount += 1;
player.index = playerCount;

player.update();
player.updateCount(playerCount)

this.greeting.html("Hello " + player.name + "  ..!!");
this.greeting.position(400,250);

});
 }
}