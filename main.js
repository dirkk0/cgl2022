function addToCounter() {
    // adding the number one to the counter
    counter = counter + 1
    console.log(counter)
    document.getElementById("p1").innerText = counter
    checkResult()
}

function checkResult() {
    if (counter >= targetCounter) {
        document.getElementById("p2").innerText = "You won! Yay!"
        document.getElementById("b1").style = "display: none;"
    } else {
        document.getElementById("p2").innerText = "you are not there yet ..."
    }
}