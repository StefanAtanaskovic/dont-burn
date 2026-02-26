// Input handling for mouse clicks and keyboard events

// Handle mouse click events
function handleMouseClick(event) {
    console.log(`Mouse clicked at: ${event.clientX}, ${event.clientY}`);
}

// Handle keyboard events
function handleKeyPress(event) {
    console.log(`Key pressed: ${event.key}`);
}

// Add event listeners
window.addEventListener('click', handleMouseClick);
window.addEventListener('keypress', handleKeyPress);