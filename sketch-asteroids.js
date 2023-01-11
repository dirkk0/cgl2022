const s = (p5) => {

    let posX = 100
    let posY = 100

    let screenX = 600
    let screenY = 400

    let incX = 6
    let incY = 4

    p5.setup = function() {
        p5.createCanvas(screenX, screenY);
    }
    p5.draw = function() {
        posX = posX + incX
        posY = posY + incY
        if (posX > screenX) {
            posX = 0
        }
        if (posY > screenY) {
            posY = 0
        }
        if (posX < 0) {
            posX = screenX
        }
        if (posY < 0) {
            posY = screenY
        }

        p5.background(80)
        p5.ellipse(posX, posY,  20, 20);
    }
}
new p5(s); // invoke p5, don't invoke 'automagically' !!!!!!

