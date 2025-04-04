const setup = () => {
let geboorte = new Date(2006,4,21);
let nu = new Date();
let verschil = nu - geboorte;

    console.log(verschil/1000/60/60/24)
}
window.addEventListener("load", setup);