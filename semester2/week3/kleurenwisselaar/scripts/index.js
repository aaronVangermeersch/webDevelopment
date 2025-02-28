const setup = () => {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            this.classList.toggle("pressed");
        });
    });
};

window.addEventListener("load", setup);
