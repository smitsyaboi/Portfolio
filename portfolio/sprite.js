// Each 'pixel' will be 7x7px in the canvas
const pixelSize = 7;

// Define the pixel data for the sprite. For simplicity,
const pixelData1 = [
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 'b', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'w', 'b', 'b', 'b', 't', 't', 't'],
    ['b', 'b', 'b', 'R', 'R', 'R', 'R', 'R', 'w', 'w', 'w', 'w', 'b', 't', 't', 't'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'b', 't', 't', 't', 't'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'W', 'W', 'b', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'b', 'W', 'W', 'b', 'W', 'W', 'b', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 't', 'b', 'W', 'W', 'b', 'W', 'W', 'W', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'b', 'b', 'W', 'W', 'W', 'W', 'b', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'b', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'b', 'W', 'W', 'b', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't'],
    ['b', 'R', 'b', 'W', 'W', 'b', 'R', 'R', 'b', 'R', 'R', 'b', 't', 't', 't', 't'],
    ['b', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'b', 't', 't', 't', 't', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't'],
];
const pixelData2 = [
    ['t', 't', 't', 'b', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'w', 'b', 'b', 'b', 't', 't', 't'],
    ['b', 'b', 'b', 'R', 'R', 'R', 'R', 'R', 'w', 'w', 'w', 'w', 'b', 't', 't', 't'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'b', 't', 't', 't', 't'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'W', 'W', 'b', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'b', 'W', 'W', 'b', 'W', 'W', 'b', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 't', 'b', 'W', 'W', 'b', 'W', 'W', 'W', 'W', 'b', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'b', 'b', 'W', 'W', 'W', 'W', 'b', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'B', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'b', 'W', 'W', 'b', 'b', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 'b', 'B', 'b', 'W', 'W', 'b', 'b', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 'b', 'b', 'b', 'b', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't', 't'],
];

// Create a mapping of pixel types to colors
const colorMap = {
    'R': '#c34c3d', // Red
    'W': '#e9c7a9', // Off-White
    'w': '#fcfdf5', // White
    'B': '#226993', // Blue
    'b': '#1d1b1c', // Black
    't': 'rgba(255,255,255,0)', // Transparent
};

// Create the canvases
const canvas1 = createCanvas(pixelData1);
const canvas2 = createCanvas(pixelData2);
document.getElementById('container').appendChild(canvas1);

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');

// Animation variables
const framesPerSecond = 10;
const animationFrames = 4;
let currentFrame = 0;
let currentCanvas = 1;

// Draw the sprite at the given frame on the active canvas
function drawSprite(frame) {
    const ctx = currentCanvas === 1 ? ctx1 : ctx2;
    const pixelData = currentCanvas === 1 ? pixelData1 : pixelData2;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let y = 0; y < pixelData.length; y++) {
        for (let x = 0; x < pixelData[y].length; x++) {
            const pixelType = pixelData[y][x];
            const color = colorMap[pixelType];

            // Draw the pixel
            ctx.fillStyle = color;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}


// Animation loop
function animate() {
    drawSprite(currentFrame);
    currentFrame = (currentFrame + 1) % animationFrames;
    setTimeout(animate, 1000 / framesPerSecond);
}

// Switch the canvases every second
setInterval(() => {
    if (currentCanvas === 1) {
        document.getElementById('container').replaceChild(canvas2, canvas1);
        currentCanvas = 2;
    } else {
        document.getElementById('container').replaceChild(canvas1, canvas2);
        currentCanvas = 1;
    }
}, 250);

// Start the animation
animate();

// Helper function to create a canvas element
function createCanvas(pixelData) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelData[0].length * pixelSize;
    canvas.height = pixelData.length * pixelSize;
    return canvas;
}