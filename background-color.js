// Get the color picker container element and the label
const colorPickerContainer = document.getElementById('color-picker-container');
const colorPickerLabel = document.querySelector('#color-picker-container label');

let isDraggingColorPicker = false;
let offsetXColorPicker, offsetYColorPicker;

// Event listener for mouse down on the label
colorPickerLabel.addEventListener('mousedown', handleMouseDown);

// Function to handle mouse down event
function handleMouseDown(e) {
    isDraggingColorPicker = true;

    // Calculate the offset from the click point to the top-left corner of the color picker container
    offsetXColorPicker = e.clientX - colorPickerContainer.getBoundingClientRect().left;
    offsetYColorPicker = e.clientY - colorPickerContainer.getBoundingClientRect().top;

    // Change cursor style
    colorPickerContainer.style.cursor = 'grabbing';
}

// Event listener for mouse move
document.addEventListener('mousemove', (e) => {
    if (!isDraggingColorPicker) return;

    // Update the color picker container position based on mouse movement
    colorPickerContainer.style.left = e.clientX - offsetXColorPicker + 'px';
    colorPickerContainer.style.top = e.clientY - offsetYColorPicker + 'px';
});

// Event listener for mouse up
document.addEventListener('mouseup', () => {
    isDraggingColorPicker = false;

    // Restore cursor style
    colorPickerContainer.style.cursor = 'grab';
});
