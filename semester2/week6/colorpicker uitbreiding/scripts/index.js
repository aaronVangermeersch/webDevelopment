const setup = () => {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");

    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");

    const colorBox = document.getElementById("box");
    const saveButton = document.getElementById("save-button");
    const savedSwatches = document.getElementById("saved-swatches");

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    saveButton.addEventListener("click", () => {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        const color = `rgb(${red}, ${green}, ${blue})`;


        const swatch = document.createElement("div");
        swatch.className = "swatch";
        swatch.style.backgroundColor = color;


        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "×";
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            swatch.remove();
        });


        swatch.addEventListener("click", () => {
            redSlider.value = red;
            greenSlider.value = green;
            blueSlider.value = blue;
            updateColor();
        });


        swatch.appendChild(deleteButton);
        savedSwatches.appendChild(swatch);
    });

    updateColor();
};

window.addEventListener("load", setup);