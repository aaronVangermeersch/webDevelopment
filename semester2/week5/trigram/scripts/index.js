const setup = () => {
    const trigram = (word) => {
        let trigrams = [];
        for (let i = 0; i <= word.length - 3; i++) {
            trigrams.push(word.substring(i, i + 3));
        }
        return trigrams;
    };

    const word = "onoorbaar";
    const trigrams = trigram(word);
    console.log(trigrams.join("\n"));

}
window.addEventListener("load", setup);