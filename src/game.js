const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const retryButton = document.getElementById('retryButton');

const carWidth = 50;
const carHeight = 100;
const roadWidth = canvas.width;
const roadHeight = canvas.height;

let playerCar;
let enemyCars;
const enemyCarWidth = 50;
const enemyCarHeight = 100;
const enemyCarSpeed = 5;
let isGameOver = false;

function initializeGame() {
    playerCar = {
        x: roadWidth / 2 - carWidth / 2,
        y: roadHeight - carHeight - 20,
        width: carWidth,
        height: carHeight,
        speed: 5,
    };
    enemyCars = [];
    isGameOver = false;
    retryButton.style.display = 'none';
    update();
}

function drawCar(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function createEnemyCar() {
    const x = Math.random() * (roadWidth - enemyCarWidth);
    const y = -enemyCarHeight;
    enemyCars.push({ x, y, width: enemyCarWidth, height: enemyCarHeight });
}

function updateEnemyCars() {
    enemyCars = enemyCars.filter(car => car.y < roadHeight);
    enemyCars.forEach(car => {
        car.y += enemyCarSpeed;
    });
}

function checkCollisions() {
    for (const car of enemyCars) {
        if (
            playerCar.x < car.x + car.width &&
            playerCar.x + playerCar.width > car.x &&
            playerCar.y < car.y + car.height &&
            playerCar.y + playerCar.height > car.y
        ) {
            isGameOver = true;
        }
    }
}

function drawText() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Urban Cruising', roadWidth / 2 - 120, 50);
}

function update() {
    if (isGameOver) {
        retryButton.style.display = 'block';
        return;
    }

    ctx.clearRect(0, 0, roadWidth, roadHeight);

    drawText();
    drawCar(playerCar.x, playerCar.y, playerCar.width, playerCar.height, 'blue');
    for (const car of enemyCars) {
        drawCar(car.x, car.y, car.width, car.height, 'red');
    }

    if (Math.random() < 0.05) {
        createEnemyCar();
    }

    updateEnemyCars();
    checkCollisions();

    requestAnimationFrame(update);
}

function movePlayerCar(event) {
    if (isGameOver) return;

    switch (event.key) {
        case 'ArrowLeft':
            playerCar.x -= playerCar.speed;
            if (playerCar.x < 0) playerCar.x = 0;
            break;
        case 'ArrowRight':
            playerCar.x += playerCar.speed;
            if (playerCar.x + playerCar.width > roadWidth) playerCar.x = roadWidth - playerCar.width;
            break;
    }
}

document.addEventListener('keydown', movePlayerCar);
retryButton.addEventListener('click', initializeGame);

initializeGame();


