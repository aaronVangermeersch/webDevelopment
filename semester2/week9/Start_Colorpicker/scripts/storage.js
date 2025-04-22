const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    const sliders = {
        red: red,
        green: green,
        blue: blue
    };

    localStorage.setItem("sliderValues", JSON.stringify(sliders));
};

const restoreSliderValues = () => {
    const saved = localStorage.getItem("sliderValues");
    if (saved) {
        const sliders = JSON.parse(saved);
        document.getElementById("sldRed").value = sliders.red;
        document.getElementById("sldGreen").value = sliders.green;
        document.getElementById("sldBlue").value = sliders.blue;
    }
};

const storeSwatches = () => {
    const swatchComponents = document.getElementById("swatchComponents").children;
    const swatches = [];

    for (let swatch of swatchComponents) {
        const color = swatch.style.backgroundColor;
        const rgb = color.match(/\d+/g);

        swatches.push({
            red: rgb[0],
            green: rgb[1],
            blue: rgb[2]
        });
    }

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    const saved = localStorage.getItem("swatches");
    if (saved) {
        const swatches = JSON.parse(saved);
        for (let swatch of swatches) {
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        }
    }
};

