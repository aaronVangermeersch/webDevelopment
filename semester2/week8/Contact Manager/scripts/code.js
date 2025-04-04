let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: '2010-10-10',
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: '1980-01-01',
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: '1970-12-31',
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let geselecteerdePersoonIndex = -1;

const bewaarBewerktePersoon = () => {
    valideer();

    if (document.querySelectorAll(".errorMessage:empty").length !== 5) {
        return;
    }

    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10)
    };

    if (geselecteerdePersoonIndex === -1) {
        personen.push(persoon);
        geselecteerdePersoonIndex = personen.length - 1;
    } else {
        personen[geselecteerdePersoonIndex] = persoon;
    }

    toonPersonenInLijst();
    selecteerPersoonInLijst(geselecteerdePersoonIndex);
};

const bewerkNieuwePersoon = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    document.querySelectorAll(".errorMessage").forEach(span => span.textContent = "");

    geselecteerdePersoonIndex = -1;
    document.getElementById("lstPersonen").selectedIndex = -1;
};

const toonPersonenInLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";

    personen.forEach((persoon, index) => {
        const optie = document.createElement("option");
        optie.text = `${persoon.voornaam} ${persoon.familienaam}`;
        optie.value = index;
        lst.appendChild(optie);
    });
};

const selecteerPersoonInLijst = (index) => {
    const persoon = personen[index];
    if (!persoon) return;

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

    geselecteerdePersoonIndex = index;
    document.getElementById("lstPersonen").selectedIndex = index;
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);

    document.getElementById("lstPersonen").addEventListener("change", (event) => {
        const index = parseInt(event.target.value, 10);
        selecteerPersoonInLijst(index);
    });

    toonPersonenInLijst();
};

window.addEventListener("load", setup);
