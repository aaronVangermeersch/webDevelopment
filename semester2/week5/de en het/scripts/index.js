const setup = () => {
    const vervangDeMetHet = (zin) => {
        let resultaat = "";
        let woord = "";

        for (let i = 0; i < zin.length; i++) {
            const karakter = zin[i];

            if (karakter === " ") {
                if (woord === "de") {
                    resultaat += "het ";
                } else {
                    resultaat += woord + " ";
                }
                woord = "";
            } else {
                woord += karakter;
            }
        }

        if (woord === "de") {
            resultaat += "het";
        } else {
            resultaat += woord;
        }

        console.log(resultaat);
    }

    const zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    vervangDeMetHet(zin);

};

window.addEventListener("load", setup);