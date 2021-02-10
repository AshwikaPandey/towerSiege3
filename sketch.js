const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var box1=[]
var box2=[]
var box3=[]
var box4=[]
var box5=[]
var box6=[]
var box7=[]
var poly2
var rope
var box9
var box12
var score=0
var backgroundImg
var bg;
function preload() {

poly2= loadImage("polygon.png")
getTime()


}
function setup() {
   var canvas = createCanvas(1200,800)
   engine = Engine.create();
    world = engine.world;
  

ground1= new Ground(800,300,400,20)
ground2= new Ground(900,700,350,20)
polygon= Bodies.circle(50,200,20)
World.add(world,polygon)
rope= new Slingshot(this.polygon,{x:200,y:300})


//box9= box1
//box12= box2

//tier 1 box 1
 for( var i=780;i<1080;i=i+50){
    box1.push(new Box(i,680,50,50))

}
//tier 2 box2
for(var v=820;v<1000;v=v+50){
    box2.push(new Box(v,630,50,50))
}
//tier 3 box 3
for(var v=860;v<940;v=v+50){
    box3.push(new Box(v,580,50,50))
}
//tier4 box3
for(var v=900;v<950;v=v+50){
    box3.push(new Box(v,530,50,50))
}
//tier 5 box5
for(var v=640;v<1000;v=v+50){
    box3.push(new Box(v,280,50,50))
}
//tier 6 box6
for(var v=680;v<900;v=v+50){
    box3.push(new Box(v,230,50,50))
}
// tier 7 box7
for(var v=720;v<860;v=v+50){
    box3.push(new Box(v,180,50,50))
}
//tier 8 box8
for(var v=760;v<810;v=v+50){
    box3.push(new Box(v,130,50,50))
}



}







function draw() {

    if(backgroundImg) {
        background(backgroundImg);
     
     }
Engine.update(engine)
ground1.display()
ground2.display()
 
 for(var i=0;i<box1.length;i++){
box1[i].display()
 }
 for(var v=0;v<box2.length;v++){
     box2[v].display()
 }
 for(var v=0;v<box3.length;v++){
    box3[v].display()
} 
text("score"+score,200,200)
box1.forEach(element => element.Score())
box2.forEach(element => element.Score())
box3.forEach(element => element.Score())
rope.display() 
imageMode(CENTER)
image(poly2,polygon.position.x,polygon.position.y,100,100)
}
function mouseDragged(){

    Matter.Body.setPosition(this.polygon, {x:mouseX,y: mouseY})



}

function mouseReleased(){

    rope.fly();


}
function keyPressed(){
    if(keyCode===32){
       rope.attach( this.polygon)
    }
}
 async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/EST")
    var responsejson= await response.json()
    var time = responsejson.datetime
    console.log(time)
    var hour= time.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour<=18){
      bg= "day.png"
    }
    else{
        bg= "Night.png"
    }
    backgroundImg = loadImage(bg) 
}