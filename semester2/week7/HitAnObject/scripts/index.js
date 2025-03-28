let global = {
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ["0.png", "1.png", "2.png", "3.png","4.png"],
    MOVE_DELAY: 500, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: -1, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const getImage = () => {
    const random = Math.floor(Math.random() * global.IMAGE_PATH_SUFFIX.length);
    return global.IMAGE_PATH_PREFIX + global.IMAGE_PATH_SUFFIX[random];
}

const setup = () => {
    let image = document.createElement('img');
    let field = document.querySelector("#playField");
    field.appendChild(image);
    image.setAttribute("id", "target");
    image.setAttribute("alt", "Een object");
    image.style.width = global.IMAGE_SIZE+ "px";
    image.style.height = global.IMAGE_SIZE +"px";
    image.addEventListener("click", onClicked);

    Restart();
};

const onClicked = (event) => {
    if (event.target.getAttribute("data-bomb") === "true"){
        global.score = 0;
        updateScore();
    }
    Restart();
}

const Restart = () =>{
    global.score+= 1;
    updateScore()
    let image = document.querySelector("#target");
    image.style.display = "none";
    setTimeout(() => {
        updateImage(image);
    }, global.MOVE_DELAY);
}

const updateScore = () => {
    let score = document.querySelector("#score");
    score.textContent = global.score;
}

const updateImage = (image) => {
    image.style.display = "";
    image.style.left = Math.random() *100 +"%";
    image.style.top = Math.random() *100 +"%";
    let imageName =  getImage();
    image.setAttribute("src", imageName);
    let isBomb = imageName.includes("0");
    if (isBomb ) {
        setTimeout(() => {
            updateImage(image);
        }, global.MOVE_DELAY*3);
    }
    image.setAttribute("data-bomb", isBomb);
}




window.addEventListener("load", setup);