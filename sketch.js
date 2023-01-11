const s = (p5) => {
    let movie
    p5.setup = function() {
        p5.createCanvas(400, 400);
        movie = p5.createVideo("test.mov");
        movie.hide()
    }
    p5.draw = function() {
        p5.background(220)
        if (p5.mouseIsPressed) {
            p5.noCursor()
            p5.image(movie, p5.mouseX-60, p5.mouseY-40, 120, 80)
            movie.loop()

            let rr = parseInt(Math.random() * 255)
            let rg = parseInt(Math.random() * 255)
            let rb = parseInt(Math.random() * 255)
            // console.log(rr, rg, rb)

            // console.log(p5.random(10))
            p5.fill(p5.color(rr, rg, rb));
        } else {
            p5.cursor()
            p5.fill(255);
        }
        // p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    }
}
new p5(s); // invoke p5, don't invoke 'automagically' !!!!!!

