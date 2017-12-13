// Ball Class Definition
class Ball {
    constructor(_col) {
        this.pos = new Vector(w/2, h/2);
        this.velocity = new Vector();
        this.acceleration = new Vector();
        this.col = _col;
        this.r = rng(2,8);
    }

    // Method for drawing the ball on the screen
    draw() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.col;
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = '1';
        ctx.stroke();
    }

    // Update method (invoked every frame inside loop() function )
    update() {

        this.r = rng(2,8);
        this.velocity = new Vector(rng(-15, 15), rng(-15, 15));
        this.pos.add(this.velocity);
    }

    // Canvas collision detection
    checkEdges() {
        
        if (this.pos.x > w - this.r / 2) {
            this.pos.x = w - this.r / 2;
            this.velocity.x *= -1;
            this.col = 'rgba(240, 128, 128, 0.5)';
   
        }
        if (this.pos.x < this.r / 2) {
            this.pos.x = this.r / 2;
            this.velocity.x *= -1;
            this.col = 'rgba(173, 216, 230, 0.5)';

        }
        if (this.pos.y > h - this.r / 2) {
            this.pos.y = h - this.r / 2;
            this.velocity.y *= -1;
            this.col = 'rgba(144, 238, 144, 0.5)';

        }
        if (this.pos.y < this.r / 2) {
            this.pos.y = this.r / 2;
            this.velocity.y *= -1;
            this.col = 'rgba(255, 255, 224, 0.5)';

        }
    }
}
