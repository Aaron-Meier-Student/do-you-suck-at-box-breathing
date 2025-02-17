function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function NoButton() {
    alert("Don't lie buddy.....");
}

function YesButton() {
    document.getElementById("question").className = "fadeOut";
    document.getElementsByTagName("main")[0].className = "fadeIn";
}

const loopCount = 4;
const steps = [
    "Breath In",
    "Hold",
    "Breath Out",
    "Hold",
];
let debounce = false;

async function Start() {
    if (debounce) return
    debounce = true;
    console.log('test')
    for (let i = 0; i < loopCount; i++) {
        for (const step of steps) {
            const element = document.createElement("h4");
            element.className = "step new";
            element.innerHTML = step;
            document.getElementById("steps").appendChild(element);
            setTimeout(() => {
                element.className = "step";
            }, 15);
            await wait(4);
            element.className = "step mini";
        }
    }
    debounce = false;
}
