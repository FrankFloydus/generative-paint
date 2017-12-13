// INIT
let c = document.querySelector('canvas');
let w = c.width = 640;
let h = c.height = 300;
let ctx = c.getContext('2d');
let ball;

// Instance
ball = new Ball('rgba(200, 200, 200, 0.5)');


// Mouse Click
c.addEventListener('click', function() {
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);
});


// Background Color
let grd = ctx.createRadialGradient(w/2,h/2,20,w/2,h/2,440);
grd.addColorStop(0,'rgb(70, 70, 70)');
grd.addColorStop(1,'rgb(20, 20, 20)');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, w, h);

// Rng Function
function rng(min, max) {
    return Math.random() * (max - min) + min;
}

// Loop
function loop () {

    ball.draw();
    ball.update();
    ball.checkEdges();

    requestAnimationFrame(loop);
}

loop();
