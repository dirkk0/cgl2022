
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
        this.posX = x
        this.posY = y
        let color = p5.color(r, g, b)

        let incX = randomInt(5)
        let incY = randomInt(5)

        // method
        this.draw = function () {
            this.posX = this.posX + incX
            this.posY = this.posY + incY
            if (this.posX > screenX) {
                this.posX = 0
            }
            if (this.posY > screenY) {
                this.posY = 0
            }
            if (this.posX < 0) {
                this.posX = screenX
            }
            if (this.posY < 0) {
                this.posY = screenY
            }

            p5.fill(color)
            p5.ellipse(this.posX, this.posY, 20, 20);

        }
    }

    function Ship(x, y, r, g, b) {
        // property
        this.posX = x
        this.posY = y
        let color = p5.color(255, 255, 0)

        this.incX = 0
        this.incY = 0

        // method
        this.draw = function () {
            this.posX = this.posX + this.incX
            this.posY = this.posY + this.incY
            if (this.posX > screenX) {
                this.posX = 0
            }
            if (this.posY > screenY) {
                this.posY = 0
            }
            if (this.posX < 0) {
                this.posX = screenX
            }
            if (this.posY < 0) {
                this.posY = screenY
            }

            p5.fill(color)
            p5.rect(this.posX, this.posY, 20, 20);
            // console.log(this.incX)
        }

        this.accX = function (a) {
            console.log(this.incX, a)
            this.incX = this.incX + a
            if (this.incX > 5) {
                this.incX = 5
            }
            if (this.incX < -5) {
                this.incX = -5
            }
            console.log(this.incX)
        }
        this.accY = function (a) {
            this.incY = this.incY + a
            if (this.incY > 5) {
                this.incY = 5
            }
            if (this.incY < -5) {
                this.incY = -5
            }
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

    let ship = new Ship(50, 50)

    const numThings = 5

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

        ship.draw()

        // collision
        for (let i = 0; i < thingArray.length; i++) {
            const thing = thingArray[i];
            if (thing.posX == ship.posX && thing.posY == ship.posY) {
                console.log("collide")
            }
        }
    }

    p5.keyPressed = function () {
        if (p5.keyCode === p5.LEFT_ARROW) {
            ship.accX(-1)
        }
        if (p5.keyCode === p5.RIGHT_ARROW) {
            ship.accX(+1)
        }
        if (p5.keyCode === p5.UP_ARROW) {
            ship.accY(-1)
        }
        if (p5.keyCode === p5.DOWN_ARROW) {
            ship.accY(+1)
        }
    }
}
new p5(s); // invoke p5, don't invoke 'automagically' !!!!!!

