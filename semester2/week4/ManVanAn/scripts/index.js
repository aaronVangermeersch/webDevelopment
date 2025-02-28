const setup = () => {
//index of)

    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoekTerm = "an";
    let teller = 0;
    let index = tekst.indexOf(zoekTerm);

    while (index !== -1) {
        teller++;
        index = tekst.indexOf(zoekTerm, index + 1);
    }

    console.log(`De sequentie "${zoekTerm}" komt ${teller} keer voor.`);


    //last index of)

    /*let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoekTerm = "an";
    let teller = 0;
    let index = tekst.lastIndexOf(zoekTerm);

    while (index !== -1) {
        teller++;
        index = tekst.lastIndexOf(zoekTerm, index - 1);
    }

    console.log(`De sequentie "${zoekTerm}" komt ${teller} keer voor.`);
    */

}
window.addEventListener("load", setup);