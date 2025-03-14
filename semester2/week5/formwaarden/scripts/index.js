const setup = () => {
    const toonResultaat = () => {

        const isRoker = document.getElementById('isRoker').checked;
        const rokerStatus = isRoker ? "is roker" : "is geen roker";

        const moedertaal = document.querySelector('input[name="moedertaal"]:checked').value;

        const favorieteBuurland = document.getElementById('favorieteBuurland').value;

        const bestellingSelect = document.getElementById('bestelling');
        const bestelling = [];
        for (let i = 0; i < bestellingSelect.options.length; i++) {
            if (bestellingSelect.options[i].selected) {
                bestelling.push(bestellingSelect.options[i].value);
            }
        }
        console.log(rokerStatus);
        console.log(`moedertaal is ${moedertaal}`);
        console.log(`favoriete buurland is ${favorieteBuurland}`);
        console.log(`bestelling bestaat uit ${bestelling.join(' ')}`);
    };


    document.getElementById('toonResultaatKnop').addEventListener('click', toonResultaat);
};

window.addEventListener("load", setup);