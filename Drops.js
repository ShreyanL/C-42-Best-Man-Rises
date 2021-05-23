class rainDrop
{
    constructor(x, y)
    {
        this.x = x;
        this.y= y;

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.circle(this.x, this.y, 5, options);                
        World.add(world, this.body);
    }

    update()
    {
        var tmp_x, tmp_y;

        push();
        
        if (this.body.position.y > height || this.body.position.x > width || this.body.position.x < 0 )
        {
            tmp_x = random(0, 400);
            tmp_y = random(0, 400);
            Matter.Body.setPosition(this.body, { x: tmp_x, y: tmp_y });            
        }
        
        translate(this.body.position.x, this.body.position.y);        
        noStroke();    
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,  0, 5, 5);        
        
        pop();
        
    }


}