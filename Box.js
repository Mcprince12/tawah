class Box extends BaseClass {
    constructor(x, y){
      super(x,y,30,40);
     this.visibility = 255;
     
    }
   display(){
     
     if(this.body.speed<3){
      super.display();
     }else{
       
       push();
       this.visibility = this.visibility-5;
       tint(this.visibility, 255);
       image(this.image, this.body.position.x, this.body.position.y, 30,40);
       World.remove(world, this.body);
       
       
       
       pop();
     }
    }

    score(){
      if(this.visibility<0&&this.visibility>-105){
        score++;
      }
    }
  };