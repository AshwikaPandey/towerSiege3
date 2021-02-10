class Box extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
   
   
    this.Visiblity = 255;
    this.color=color(random(0, 255), random(0, 255), random(0, 255))
  }
 Score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++
    }
    
  }
  

 display(){
  // console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
   
     //rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
}
