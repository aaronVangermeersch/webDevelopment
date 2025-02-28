const setup = () => {



    document.getElementById('submitButton').addEventListener('click', function() {

        let inputText = document.getElementById('inputText').value;
        let spacedText = inputText.split('').join(' ');

        console.log(spacedText);
    });
}
window.addEventListener("load", setup);