const setup = () => {

    const ei = document.getElementById('ei').value;
    const tekst = document.getElementById('inputText');
    let note = document.getElementById('note');
    const foto = document.getElementById('img');
    let aantal = 0

    const print= () =>{
    if(ei.value !== 'MetEi') {
        note = 'Hieboven, een kip met een ei';

    }
    else{
        note = 'Hierboven, een kip zonder een ei'
    }
    }

    const check = (note) =>{
        for(let i = 0; i < note.length; i++){
            if(tekst.value === note[i]){
                aantal++;
            }
        }
        note += 'Letter ' + tekst.value + 'komt ' + aantal + 'voor in bovenstaande zin';
        console.log(note);
    }
    console.log(check)
}
window.addEventListener("load", setup);