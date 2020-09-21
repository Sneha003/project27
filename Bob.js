   
      class Bob {
        constructor(x, y,r) {
          var options = {
            isStatic:false,
              'restitution':3,
              'friction':10,
              'density':10,
              
          }
          this.x=x;
          this.y=y;
          this.r=r
          this.body=Bodies.circle(this.x, this.y, this.r, options)
          World.add(world, this.body);
        }
        display(){
          var pos=this.body.position;		

  
          fill(255,0,255)
          ellipseMode(CENTER)
          ellipse(pos.x,pos.y,this.r, this.r);
          
        }
      };
      
  
  