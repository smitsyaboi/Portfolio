// Each 'pixel' will be 5x5px in the canvas
const pixelSize = 5;

// Define the pixel data for the sprite. For simplicity,
const pixelData = [
    ['t','t','t', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 't', 't', 't', 'R', 'b', 'b', 'b', 'R', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 't', 'b', 'b', 'r', 'R', 'R', 'R', 'R', 'b', 'b', 'R', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 'b', 'r', 'r', 'R', 'w', 'w', 'w', 'w', 'w', 'r', 'R', 'b', 'R', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'R', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'R', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'r', 'R', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'R', 'r', 'r', 'R', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'R', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'r', 'r', 'R', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'r', 'R', 'R', 'w', 'w', 'R', 'R', 'R', 'R', 'r', 'w', 'w', 'w', 'w', 'w', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'R', 'R', 'R', 'R', 'R', 'w', 'w', 'w', 'w', 'R', 'R', 'R', 'w', 'w', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'R', 'R', 'R', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'R', 's', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'b', 'b', 'b', 'b', 'b', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 'R', 'b', 'W', 'b', 'R', 'R', 'R', 'b', 'b', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'b', 't', 't', 't', 't', 't'],
    ['t','t','b', 'b', 'W', 'r', 'W', 'W', 'b', 'W', 'R', 'R', 'b', 'b', 'b', 'r', 'r', 'r', 'r', 'r', 'b', 't', 't', 't', 't', 't'],
    ['t','R','b', 'b', 'W', 'R', 'W', 'W', 'b', 'W', 'r', 'r', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 'b', 'b', 'W', 'b', 'W', 'W', 'r', 'r', 'W', 'r', 'R', 'r', 'r', 'r', 'b', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'b', 'b', 'W', 'W', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'b', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 't', 'b', 'W', 'W', 'r', 'b', 'R', 'r', 'r', 'R', 'b', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 'b', 'w', 'b', 'b', 'r', 'r', 'r', 'R', 'b', 'b', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'w', 'w', 'w', 'b', 'R', 'b', 'b', 'b', 'r', 'r', 'b', 'R', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'w', 'w', 'w', 'b', 'w', 'r', 'r', 'b', 'r', 'r', 'r', 'b', 'r', 'b', 'R', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'b', 'w', 'w', 'b', 'w', 'r', 'r', 'r', 'b', 'r', 'b', 'b', 'r', 'r', 'r', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 'b', 'R', 'R', 'b', 'w', 'w', 'b', 'r', 'r', 'b', 'b', 'b', 'R', 'R', 'b', 'r', 'r', 'r', 'b', 't', 't', 't', 't'],
    ['t','t','R', 'w', 'b', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'r', 'r', 'w', 'r', 'b', 't', 't', 't'],
    ['t','t','b', 'w', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'w', 'r', 'w', 'b', 't', 't', 't'],
    ['t','R','w', 'w', 'w', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'r', 'w', 'b', 'w', 'R', 'R', 't'],
    ['t','b','w', 'w', 'w', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'R', 'b', 'w', 'w', 'w', 'b', 't'],
    ['R','w','w', 'w', 'w', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'R', 'w', 'w', 'w', 'w', 'R'],
    ['b','w','w', 'w', 'w', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'b', 'w', 'w', 'w', 'w', 'b'],
    ['b','b','b', 'w', 'w', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'r', 'r', 'w', 'w', 'b', 't'],
    ['t','b','r', 'b', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'r', 'r', 'r', 'b', 't', 't'],
    ['t','b','r', 'r', 'r', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'b', 'b', 'b', 'R', 'R', 'w', 'R', 'b', 'R', 'b', 't', 't', 't'],
    ['t','b','r', 'w', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 'R', 'R', 'b', 'w', 'w', 'b', 'R', 'b', 'b', 't', 't', 't', 't'],
    ['b','r','w', 'w', 'b', 'b', 'w', 'w', 'w', 'w', 'R', 'w', 'w', 'b', 'b', 'b', 'b', 'b', 'R', 'b', 'b', 't', 't', 't', 't', 't'],
    ['b','r','w', 'w', 'b', 'R', 'b', 'b', 'b', 'b', 'R', 'R', 'R', 'b', 'R', 'R', 'R', 'b', 'R', 'R', 'b', 't', 't', 't', 't', 't'],
    ['b','b','b', 'R', 'w', 'w', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 'R', 'R', 'R', 'b', 'R', 'r', 'b', 't', 't', 't', 't', 't'],
    ['b','w','w', 'b', 'b', 'w', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't'],
    ['b','b','b', 'R', 'R', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 'R', 'R', 'R', 'R', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['b','R','R', 'R', 'r', 'b', 'b', 'R', 'R', 'R', 'R', 'R', 'b', 'R', 'R', 'R', 'R', 'R', 'R', 't', 't', 't', 't', 't', 't', 't'],
    ['t','R','R', 'w', 'b', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','b', 'b', 't', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 'b', 'r', 'R', 'r', 'R', 'b', 't', 'b', 'R', 'r', 'R', 'r', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'R', 'R', 'R', 'r', 'R', 'r', 'b', 't', 'b', 'R', 'R', 'r', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'R', 'r', 'R', 'r', 'b', 't', 't', 'R', 'R', 'R', 'R', 'r', 'R', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'R', 'R', 'r', 'R', 'b', 't', 't', 't', 'b', 'R', 'r', 'R', 'r', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'R', 'r', 'R', 'r', 'b', 't', 't', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 'b', 'R', 'R', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 'b', 'R', 'R', 'b', 't', 't', 't', 't', 't', 'b', 'R', 'R', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 't', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'b', 'w', 'w', 'b', 't', 't', 't', 't', 'b', 'R', 'R', 'w', 'r', 'b', 't', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'R', 'R', 'b', 'R', 'b', 't', 't', 't', 'b', 'R', 'b', 'R', 'b', 'b', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'R', 'b', 'b', 'R', 'R', 'b', 't', 't', 't', 'b', 'R', 'R', 'b', 'R', 'w', 'w', 'b', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'R', 'w', 'w', 'R', 'b', 'b', 't', 't', 't', 't', 'b', 'b', 'R', 'r', 'r', 'r', 'b', 't', 't', 't', 't'],
    ['t','t','t', 't', 'b', 'r', 'r', 'r', 'r', 'b', 't', 't', 't', 't', 't', 't', 't', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't'],
    ['t','t','t', 't', 't', 'b', 'b', 'b', 'b', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
];

// Create a mapping of pixel types to colors
const colorMap = {
    'R': '#c34c3d', // Red
    'r': '#f7767a', // Light-Red
    'W': '#e9c7a9', // Off-White
    'w': '#fcfdf5', // White
    'B': '#226993', // Blue
    'b': '#1d1b1c', // Black
    't': 'rgba(255,255,255,0)', // Transparent
};

// Create the canvas
const canvas1 = createCanvas(pixelData);
document.getElementById('container').appendChild(canvas1);

function createCanvas(pixelData) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = pixelData[0].length * pixelSize;
    canvas.height = pixelData.length * pixelSize;

    for (let y = 0; y < pixelData.length; y++) {
        for (let x = 0; x < pixelData[y].length; x++) {
            const pixelType = pixelData[y][x];
            // Draw the pixel
            context.fillStyle = colorMap[pixelType];
            context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }

    return canvas;
}