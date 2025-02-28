const setup = () => {
    const maakMetSpaties = (inputText) => {
        let result = "";
        for (let i = 0; i < inputText.length; i++) {
            result += inputText[i] + " ";
        }
        return result.trim();
    };
    document.getElementById('submitButton').addEventListener('click', function() {
        let inputText = document.getElementById('inputText').value;

        let spacedText = maakMetSpaties(inputText);
        console.log(spacedText);
    });
}
window.addEventListener("load", setup);