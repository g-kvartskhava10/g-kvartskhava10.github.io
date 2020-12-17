let canvasWidth = 800;
let canvasHeight = 600;
let margin = 20;
let count = 36;
let delta = (Math.min(canvasWidth, canvasHeight) - margin * 2) / count;

function setup() {
    createCanvas (canvasWidth, canvasHeight);
    noStroke();
    background(128);
    fill(0);

    for (let row = 0; row < count; row++) {
        let py = (row + 2) * delta;
        for (let col = 0; col < count; col++) {
            let px = (col + 2) * delta;
            let rand = Math.round(random(1.1) * 3);
            ellipse (px, py, (rand/4) ** 2 * delta, (rand/4) ** 2 * delta)
        }
    }
}

