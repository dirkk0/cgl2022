
const s = (p5) => {

    // object definition
    function Thing(x, y) {
        // property
        let posX = x
        let posY = y

        let incX = parseInt(Math.random() * 10) - 5
        let incY = parseInt(Math.random() * 10) - 5

        // method
        this.draw = function () {
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

            p5.ellipse(posX, posY, 20, 20);

        }
    }

    // let posX = 100
    // let posY = 100

    let screenX = 600
    let screenY = 400



    // object instances
    let t1 = new Thing(30, 40)
    let t2 = new Thing(120, 110)

    p5.setup = function () {
        p5.createCanvas(screenX, screenY);
    }
    p5.draw = function () {
        p5.background(80)

        t1.draw()
        t2.draw()

        // posX = posX + incX
        // posY = posY + incY
        // if (posX > screenX) {
        //     posX = 0
        // }
        // if (posY > screenY) {
        //     posY = 0
        // }
        // if (posX < 0) {
        //     posX = screenX
        // }
        // if (posY < 0) {
        //     posY = screenY
        // }

        // p5.ellipse(posX, posY, 20, 20);
    }
}
new p5(s); // invoke p5, don't invoke 'automagically' !!!!!!

