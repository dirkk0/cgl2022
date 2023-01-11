
const s = (p5) => {

    function randomInt(n) {
        return parseInt(Math.random() * n * 2) - n
    }

    function randomColor(n) {
        return parseInt(Math.random() * 255)
    }

    // object definition
    function Thing(x, y, r, g, b) {
        // property
        let posX = x
        let posY = y
        let color = p5.color(r, g, b)

        let incX = randomInt(5)
        let incY = randomInt(5)

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

            p5.fill(r, g, b)
            p5.ellipse(posX, posY, 20, 20);

        }
    }

    // let posX = 100
    // let posY = 100

    let screenX = 600
    let screenY = 400



    // object instances
    // let t1 = new Thing(30, 40)
    // let t2 = new Thing(120, 110)

    // let thingArray = [new Thing(30, 40), new Thing(120, 110), new Thing(20, 110)]
    let thingArray = []

    const numThings = 10

    for (let i = 0; i < numThings; i++) {
        let r = randomColor()
        let g = randomColor()
        let b = randomColor()
        const thing = new Thing(randomInt(50), randomInt(50), r, g, b)
        thingArray.push(thing)
    }

    p5.setup = function () {
        p5.createCanvas(screenX, screenY);
    }
    p5.draw = function () {
        p5.background(220)

        for (let i = 0; i < thingArray.length; i++) {
            const thing = thingArray[i];
            thing.draw()
        }

        // t1.draw()
        // t2.draw()

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

