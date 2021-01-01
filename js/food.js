class Food {

    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }

        var lastFed, foodStock;

        this.body = Bodies.circle(x, y, radius, options); 
        this.image = loadImage("Milk.png");
        World.add(world, this.body);

      }


    getFoodStock(){}

    updateFoodStock(){}

    deductFood(){}


      display(){

      var x=80, y=100;

      imageMode(CENTER);
      image(this.image, 720, 220, 70, 70);

      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          this.image(this.images,x,y,50,50);
        }
      }
        
        // specific task's 5 point is not done   - - - - - - - - - - - - -

      }

}