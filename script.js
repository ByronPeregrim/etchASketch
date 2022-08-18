const container = document.querySelector('#container');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');

let userSizeInput = 16;

createGrid(16);


function createGrid(sizeOfGrid) {
    container.innerHTML = "";
    for (let i = 1; i <= (sizeOfGrid ** 2); i++) { // Create grid of squares with input width
        const gridCell = document.createElement('div');
        container.appendChild(gridCell);
        gridCell.classList.add('gridCell');
        gridCell.addEventListener('mouseover', function() { // On hover, squares turn black
            gridCell.style.backgroundColor = "black";
        })
    }
    container.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr)`;
}

sizeButton.addEventListener('click', function() {
    userSizeInput = prompt("Enter width of grid (Max: 50)");
    while (userSizeInput > 50) {
        userSizeInput = prompt("Enter width of grid (Max: 50)");
    }
    createGrid(userSizeInput);
})

resetButton.addEventListener('click', function() {
    createGrid(userSizeInput);
})





