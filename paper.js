class Paper {
    constructor(x, y,r) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=y;
      this.y=y
      this.body = Bodies.circle(x, y,r/2, options);
      this.r=r
      
      
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      
      push ()
      translate (paperpos.x,paperpos.y)
     
      rectMode(CENTER);
      strokeWeight(3)
      stroke("pink")
      fill("pink");
      ellipse(0,0, this.r, this.r);
      pop ()
    }
  };
  