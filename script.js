import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime

function updateLoop(time) {
    if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta)
    }

    lastTime = time
    window.requestAnimationFrame(updateLoop)
}
window.requestAnimationFrame(updateLoop);