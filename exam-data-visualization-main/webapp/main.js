let counter = 0;

function displayCounter() {
    document.getElementById('counter').textContent = counter;
    console.log(`Counter : ${counter}`);
}

document.getElementById('increaseBtn').addEventListener('click', increaseCounter);
document.getElementById('decreaseBtn').addEventListener('click', decreaseCounter);
document.getElementById('resetBtn').addEventListener('click', resetCounter);

function increaseCounter() {
    counter++;
    displayCounter();
}

function decreaseCounter() {
    counter--;
    displayCounter();
}

function resetCounter() {
    counter = 0;
    displayCounter();
}

function processCommand(command) {
    switch (command) {
        case 'i':
            increaseCounter();
            break;
        case 'd':
            decreaseCounter();
            break;
        case 'r':
            resetCounter();
            break;
        default:
            console.log('Commande invalide. Veuillez réessayer.');
            break;
    }
}

function handleKeyPress(event) {
    const command = event.key.toLowerCase();
    processCommand(command);
}

document.addEventListener('keydown', handleKeyPress);

displayCounter();
