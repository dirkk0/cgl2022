const s = (p5) => {

    let posX = 100
    let posY = 100

    p5.setup = function() {
        p5.createCanvas(400, 400);
    }
    p5.draw = function() {
        posX = posX + 1
        if (posX > 400) {
            posX = 0
        }
        p5.background(80)
        p5.ellipse(posX, posY,  20, 20);
    }
}
new p5(s); // invoke p5, don't invoke 'automagically' !!!!!!

