const setup = () => {
    let gemeenten = [];

    while (true) {
        let invoer = prompt("Voer een gemeente in (typ 'stop' om te stoppen):");
        if (invoer.toLowerCase() === "stop") {
            break;
        }
        gemeenten.push(invoer);
    }

    gemeenten.sort();

    let selectBox = document.getElementById("gemeentenLijst");
    gemeenten.forEach(function(gemeente) {
        let option = document.createElement("option");
        option.value = gemeente;
        option.text = gemeente;
        selectBox.add(option);
    });
}
window.addEventListener("load", setup);