const main = document.getElementsByTagName("main")[0];

const major = ["I", "ii", "iii", "IV", "V", "vi", "vii*"];

let numDisplay = document.createElement("h1");
main.appendChild(numDisplay)

const randomChord = (type) => {
    let randomNum = Math.floor(Math.random() * 7);
    numDisplay.innerText = major[randomNum];
    setTimeout(() => {
        console.log(`test`)
        randomChord(major);
    }, 4000);
}


randomChord(major);