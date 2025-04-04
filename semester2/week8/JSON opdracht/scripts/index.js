const setup = () => {
    let student1 = {
    voornaam: "Aaron",
    naam: "Vangermeersch",
    leeftijd: 18,
    geboortedatum: new Date(2006, 4, 21)
    };


    let tekst = JSON.stringify(student1);
    console.log(tekst);


    const print = '{"voornaam":"Aaron","naam":"Vangermeersch","leeftijd":18,"geboortedatum":"2006-05-20T22:00:00.000Z"}';

    const studentObject = JSON.parse(print);

    console.log(studentObject.naam);
    console.log(studentObject);

}
window.addEventListener("load", setup);