// background-color.js

function changeBackgroundColor() {
    // Get the selected color from the color picker
    const colorPicker = document.getElementById('backgroundColor');
    const selectedColor = colorPicker.value;

    // Change the background color of the body
    document.body.style.backgroundColor = selectedColor;
}
